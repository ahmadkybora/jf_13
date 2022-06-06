// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "public"),
    },
    devServer: {
        open: true,
        host: "localhost",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html", // template file
            filename: "index.html", // output file
        }),
        // htmlGenerators,
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['transform-class-properties']
                    }
                }
            },
            {
                test: /\.ts$/i,
                use: ["ts-loader"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: [
                    "css-loader",
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'css-loader', 'sass-loader'
                ]
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

// const htmlGenerators = listOfComponents.reduce((entries, componentName) => {
// 	entries.push(new HtmlWebpackPlugin({
// 		inject: true,
// 		chunks: [componentName],
// 		filename: `${componentName}.html`
// 	}));
// 	return entries;
// }, []);

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
    } else {
        config.mode = "development";
    }
    return config;
};