const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean");
const avif = require("gulp-avif");
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");
const svgSprite = require("gulp-svg-sprite");
const include = require("gulp-include");
const webpack = require("webpack-stream");

function pages() {
  return src("app/pages/*.html")
    .pipe(
      include({
        includePaths: "app/components",
      })
    )
    .pipe(dest("app"))
    .pipe(browserSync.stream());
}

function fonts() {
  return src("app/assets/fonts/src/*.*")
    .pipe(
      fonter({
        formats: ["woff", "ttf"],
      })
    )
    .pipe(src("app/assets/fonts/*.ttf"))
    .pipe(ttf2woff2())
    .pipe(dest("app/assets/fonts"));
}

function images() {
  return src(["app/assets/images/src/*.*", "!app/assets/images/src/*.svg"])
    .pipe(newer("app/assets/images/*.*"))
    .pipe(avif({ quality: 50 }))
    .pipe(src("app/assets/images/src/*.*"))
    .pipe(newer("app/assets/images/*.*"))
    .pipe(webp())
    .pipe(src("app/assets/images/src/*.*"))
    .pipe(newer("app/assets/images/*.*"))
    .pipe(imagemin())
    .pipe(dest("app/assets/images"));
}

function sprite() {
  return src("app/assets/images/src/*.svg")
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg",
            example: true,
          },
        },
      })
    )
    .pipe(dest("app/assets/images"));
}

function styles() {
  return src("app/scss/style.scss")
    .pipe(autoprefixer({ overrideBrowserslist: ["last 10 version"] }))
    .pipe(concat("style.min.css"))
    .pipe(sassGlob())
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
}

function scripts() {
  return src(["app/js/modules/*.js", "app/js/main.js", "app/js/fees.js"])
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
}

function watching() {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
  });

  watch(["app/scss/**/*.scss"], styles);
  watch(["app/assets/images/src"], images);
  watch(["app/js/main.js", "app/js/fees.js", "app/js/modules/*.js"], scripts);
  watch(["app/components/*", "app/pages/*"], pages);
  watch(["app/*.html"]).on("change", browserSync.reload);
}

function building() {
  return src(
    [
      "app/css/style.min.css",
      "app/assets/images/*.*",
      "!app/assets/images/*.svg",
      "!app/assets/images/stack/*.html",
      "app/assets/images/sprite.svg",
      "app/assets/fonts/*.*",
      "app/js/main.min.js",
      "app/js/fees.min.js",
      "app/*.html",
    ],
    {
      base: "app",
      allowEmpty: true,
    }
  ).pipe(dest("dist"));
}

function cleanDist() {
  return src("dist").pipe(clean());
}

exports.scripts = scripts;
exports.images = images;
exports.sprite = sprite;
exports.fonts = fonts;
exports.building = building;
exports.pages = pages;

exports.build = series(cleanDist, building);
exports.default = parallel(styles, images, scripts, pages, watching);
