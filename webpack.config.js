const path = require('path');
module.exports = {
    context: __dirname,
    entry: "./frontend/entry.jsx",
    output: {
        // path: path.resolve(__dirname),
        // for rails:
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                {
                    loader: "file-loader",
                    options: {
                    name: "[name][md5:hash].[ext]", // Name of bundled asset
                    outputPath: "webpack-assets/", // Output location for assets. Final: `app/assets/webpack/webpack-assets/`
                    publicPath: "/assets/webpack-assets/", // Endpoint asset can be found at on Rails server
                    },
                },
                ],
            },
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"],
        alias: {
        assets: path.resolve("./app/assets"), // Makes it easier to reference our assets in jsx files
        },
  },
};
