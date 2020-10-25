const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var mode = process.argv.findIndex(x => x.indexOf('development') > -1) > -1 ? "dev" : 'pro';
/**
 * https://www.bootcdn.cn/react/16.14.0/
 * 
 */
var reactCdnJS = mode == 'pro' ?
    `https://cdn.bootcdn.net/ajax/libs/react/0.0.0-0c756fb-f7f79fd/umd/react.production.min.js` :
    'https://cdn.bootcdn.net/ajax/libs/react/0.0.0-0c756fb-f7f79fd/umd/react.development.js';
module.exports = {
    mode: 'production',
    entry: "./app/index.tsx",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "assert/js/bundle.js"
    },
    devServer: {
        //设置基本目录结构
        contentBase: path.resolve(__dirname, 'dist'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host: 'localhost',
        //服务端压缩是否开启
        compress: true,
        hot: true,
        port: 8080,
        open: true
    },
    resolve: {
        extensions: ['.tsx', ".ts", ".js", ".jsx", ".less", ".css"]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader"
        },
        {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    // options: {
                    //     // 这里可以指定一个 publicPath
                    //     // 默认使用 webpackOptions.output中的publicPath
                    //     publicPath: '../'
                    // },
                },
                'css-loader', 'postcss-loader'
            ],
        },
        {
            test: /\.less$/,
            use:
                [
                    {
                        loader: MiniCssExtractPlugin.loader,

                    },
                    'css-loader', 'postcss-loader', 'less-loader'
                ],
        },
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        },
        {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
        }]
    },
    // externals: {
    //     "react": 'React',
    //     'ReactDOM': 'ReactDOM',
    //     'ReactRouter': 'ReactRouter',
    //     'History': 'History'
    // },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../index.html"), // 源模板文件
            filename: './index.html', // 输出文件【注意：这里的根路径是module.exports.output.path】
            showErrors: true,
            hash: true,
            inject: 'body',
            templateParameters: {
                reactCdnJS
            }
        }),
        new MiniCssExtractPlugin({ filename: "assert/css/style.css" })
    ]
};