const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
    },
    mode: 'development',
	module: {
		rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader' , 'less-loader']
            },
            {
                test: /\.pug$/,
                use: ['html-loader?attrs=false', 'pug-html-loader']
            },
            { test: /\.handlebars$/, loader: "handlebars-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'home.html',
            template: 'template/home.handlebars',
            inject: false,
            minify:false
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: 'template/about.handlebars',
            inject: false,
            minify:false
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: 'template/contact.handlebars',
            inject: false,
            minify:false
        })
    ],
    watch: true
};