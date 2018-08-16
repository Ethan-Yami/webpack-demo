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
		filename: "js/[name]-[chunkhash].js",
		publicPath:'https://upjg.org'
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:"index-[hash].html",
			template:"index.html",
			minify:{
				removeComments:true,
				removeEmptyElements:true,
				removeTagWhitespace:true,
				collapseWhitespace:true,
			},
			inject:true,
			title:'webpack is pretty good',
			date:new Date()
		})
	]

}