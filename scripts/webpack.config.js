const path = require("path");
const HtmlWebpackPlugin=require('HtmlWebpackPlugin');
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
    plugins: []
};