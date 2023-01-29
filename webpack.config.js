const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
module.exports = {
    mode: "development",
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use:
                    [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: [
                                    [
                                        "@babel/preset-env",
                                        {
                                            targets:{
                                                "chrome": "88"
                                            },
                                            "corejs":"3",
                                            "useBuiltIns": "usage"
                                        }
                                    ]
                                ]
                            }
                        },
                        'ts-loader'
                    ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: "Webpack Demo",
                template: "src/index.html"
            }
        ),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}
