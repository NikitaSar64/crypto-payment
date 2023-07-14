const config = {
  mode: "production",
  entry: {
    main: "./app/js/main.js",
    fees: "./app/js/fees.js",
    business: "./app/js/business.js",
    gambling: "./app/js/gambling.js",
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
