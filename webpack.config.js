const path = require("path");

console.log("Hi mom"  )

module.exports = {
  entry: "./js/index.js",
  mode: "production",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
