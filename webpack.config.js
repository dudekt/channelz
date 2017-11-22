const webpack = require('webpack')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

console.log(path.resolve(__dirname, './src/app/elements/'));

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            './src/index',
        ],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 2,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    },
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.resolve(__dirname, './src/app/scss/')]
                        }
                    }
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            progressive: true,
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            optipng: {
                                optimizationLevel: 7,
                            },
                            gifsicle: {
                                interlaced: false,
                            }
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',

                    },
                    'postcss-loader',
                ],
            },
        ],
    },
    plugins: [
        new UglifyJSPlugin()
    ],
    resolve: {
        alias: {
            components: path.resolve(__dirname, './src/app/components/'),
            elements: path.resolve(__dirname, './src/app/elements/'),
        },
        extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
    },
};
