
const path = require('path');
const HtmlWbapckPlugin = require('html-webpack-plugin')
module.exports = {
    devServer: {
        port: 3000
    },
    entry: './src/index',
    // 识别ts
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src/")
        },
        extensions: ['.tsx', '.ts', '.js', '.jsx', 'json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                        '@babel/preset-typescript'
                      ],
                    }
                }
            },
            {
                test: /\.(le|c)ss$/,
                use: ['style-loader', 'css-loader', 'less-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return require('autoprefixer')({
                                "overrideBrowserslist": [
                                    ">0.25%",
                                    "not dead"
                                ]
                            })
                        }
                    }
                }]
            }
        ],
    },
    plugins: [
        new HtmlWbapckPlugin({
            template: './public/index.html',
        })
    ]
}