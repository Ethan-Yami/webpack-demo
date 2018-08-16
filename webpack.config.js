var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js'
	},
	output: {

		path: __dirname +"/dist/",
		filename: "js/[name]-[chunkhash].js"
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:"index-[hash].html",
			template:"index.html",
			minify:true,
			inject:true,
			title:'webpack is pretty good',
			date:new Date()
		})
	]

}