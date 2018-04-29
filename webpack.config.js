const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [
		'./client/main.js',
		'./client/sass/style.sass'
 ],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	mode: 'development',
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
			{ test: /\.jsx$/, exclude: /node_modules/, use: 'babel-loader' },
			{ test: /\.sass$/, use: ExtractTextPlugin.extract({
				use: [{
					loader: 'css-loader',
					options: {
						sourceMap: true,
						minimize: true,
						url: false
					}
				}, {
					loader: 'sass-loader',
					options: {
						sourceMap: true
					}
				}]
			}) }
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'style.css',
			allChunks: true,
		})
	],
	devServer: {
		contentBase: path.join(__dirname, "public"),
		compress: true,
		port: 8090
	}
};