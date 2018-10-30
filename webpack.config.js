const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'src/dist'),
        publicPath: path.resolve(__dirname, '/dist/'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [{
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(css)$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(less)$/,
                use: [
                    'less-loader'
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, 'src/components'),
            "@permission": path.resolve(__dirname, 'src/components/permission')
        }
    },
    devServer: {
        contentBase: './src',
        host: '0.0.0.0'
    }
};