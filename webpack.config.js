// const path = require("path");

// module.exports = {
//   entry: "./client/main.js", // // assumes your entry point is the main.js in your client folder
//   mode: "development",
//   output: {
//     path: __dirname, // assumes your bundle.js will also be in the root of your project folder
//     filename: "./public/bundle.js",
//   },
//   devtool: "source-map",
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },
//     ],
//   },
// };

module.exports = {
  entry: "./client/main.js",
  mode: "development",
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          // presets: ["@babel/preset-react"],
        },
      },
      // use the style-loader/css-loader combos for anything matching the .css extension
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

//          presets: ["react", "es2015"],
