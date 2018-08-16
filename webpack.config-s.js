var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js',
		b: './src/script/b.js',
		c: './src/script/c.js'
	},
	output: {

		path: __dirname +"/dist/",
		filename: "js/[name]-[chunkhash].js",
		publicPath:'https://upjg.org'
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:"index.html",
			template:"index.html",
			inject:'body',			
			minify:{
				removeComments:true,
				removeEmptyElements:true,
				/*removeTagWhitespace:true,
				collapseWhitespace:true,*/
			},
			
			title:'webpack is pretty good',
			date:new Date(),
			chunks:['main','a']
		}),
		new htmlWebpackPlugin({
			filename:"login.html",
			template:'login.html',
			inject:'body',
			
			minify:{
				removeComments:true,
				removeEmptyElements:true,
			/*	removeTagWhitespace:true,
				collapseWhitespace:true,*/
			},
			chunks:['main']
		}),
		new htmlWebpackPlugin({
			filename:"a.html",
			template:'a.html',
			inject:'body',		
			minify:{
				removeComments:true,
				removeEmptyElements:true,
				/*removeTagWhitespace:true,
				collapseWhitespace:true,*/
			},
			chunks:['a']

		}),

		new htmlWebpackPlugin({
			filename:"b.html",
			template:'b.html',
			inject:'body',
			minify:{
				removeComments:true,
				removeEmptyElements:true,
				/*removeTagWhitespace:true,
				collapseWhitespace:true,*/
			},
			chunks:['b']


		}),

		new htmlWebpackPlugin({
			filename:"c.html",
			template:'c.html',
			inject:"body",
			minify:{
				removeComments:true,
				removeEmptyElements:true,
				/*removeTagWhitespace:true,
				collapseWhitespace:true,*/
			},
			chunks:['c']


		})
	]

}