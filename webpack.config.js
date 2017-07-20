const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	context: __dirname,
	devtool: "eval-source-map",
	entry: "./src/js/main.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	module:{
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
				    },
					{
						loader: 'css-loader'
				    },
					{
						loader: 'autoprefixer-loader',
						options: {
							   enforse: 'pre'
						   }
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: 'url-loader'
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: [
					{
	                    loader: 'babel-loader',
	                    options: {
	                        presets: ['env']
	                    }
					},
					{
						loader: "eslint-loader",
						options: {
							enforse: 'pre'
						}
					}
				]
			}
		]
	},
	plugins: [new UglifyJsPlugin({
		minimize: true,
		comments: false,
		compress: {
			warnings: false
		},
		output: {
			comments: false
		}
	})],
	devServer: {
		inline:true,
		port: 8081
	}
}
