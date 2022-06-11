// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HTMLWebpackPLugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

// متغییر زیر در اصل آرای های از نام کامپوننت ها است
let htmlPageNames = ['users'];
// اینجا همه کامپوننت ها در یک قسمت در حال لود شدن هستند
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HTMLWebpackPLugin({
    template: `./src/components/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    chunks: [`${name}`] // respective JS files
  })
});

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
        new HTMLWebpackPLugin({
            template: "public/index.html", // template file
            filename: "index.html", // output file
        }),
        // new HTMLWebpackPLugin({  // Also generate a test.html
        //     template: 'public/users.html',
        //     filename: 'users.html',
        //   })
        // htmlGenerators,
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ].concat(multipleHtmlPlugins),
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
                use: ["html-loader"],
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