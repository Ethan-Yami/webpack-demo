var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js'
	},
	output: {

		path: __dirname +"/dist/js",
		filename: "[name]-[chunkhash].js"
	},
	plugins:[
		new htmlWebpackPlugin({
			template:"index.html"
		})
	]

}