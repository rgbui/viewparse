const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
var mode = process.argv.findIndex(x => x.indexOf('deveploment') > -1) > -1 ? "dev" : 'pro';
/**
 * https://www.bootcdn.cn/react/16.14.0/
 */
var reactCdnJS = mode == 'pro' ? `https://cdn.bootcdn.net/ajax/libs/react/16.14.0/cjs/react.production.min.js` : 'https://cdn.bootcdn.net/ajax/libs/react/16.14.0/cjs/react.development.min.js';
module.exports = {
    mode: 'production',
    entry: "./app/index.tsx",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.tsx', ".ts", ".js", ".jsx"]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader"
        },
        {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        }]
    },
    externals: {
        "react": 'react',
        'react-dom': 'ReactDOM'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../index.html"), // 源模板文件
            filename: './index.html', // 输出文件【注意：这里的根路径是module.exports.output.path】
            showErrors: true,
            hash: true,
            inject: 'body',
            templateParameters: {
                reactCdnJS
            }
        })
    ]
};