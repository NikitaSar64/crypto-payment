const config = {
  mode: "production",
  entry: {
    main: "./app/js/main.js",
  },
  output: {
    filename: "[name].min.js",
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "last 2 versions" }]],
          },
        },
      },
    ],
  },
};

module.exports = config;
