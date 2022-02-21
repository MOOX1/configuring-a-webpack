const path = require('path');
const HtmlwebPackPlugin = require("Html-webpack-plugin")

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
module: {
    rules: [
        {
            test:/\.(js|jsx)$/,
            exclude: /node-module/,
            use: {
                loader: "babel-loader"
            }
        }
    ]
},
plugins: [
    new HtmlwebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
    })
]
}



