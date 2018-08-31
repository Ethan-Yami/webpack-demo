var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
module.exports = {
	mode: 'development',
	/*entry: {
		main: './src/script/main.js',
		a: './src/script/a.js',
		b: './src/script/b.js',
		c: './src/script/c.js'
	},*/
	entry:"./src/app.js",
	output: {
		path: __dirname +"/dist/",
		filename: "js/[name]-[bundle].js",
		publicPath:'https://upjg.org'
	},
	module:{
		loaders:[
			{
				test: /\.js$/,
				loader:'babel',
				query:{
					presets:['lastest']
				}
			}
		]

	},
	plugins:[
		
		new htmlWebpackPlugin({
			filename:"index.html",
			template:"index.html",
			inject:'body',			
			/*minify:{
				removeComments:true,
				removeEmptyElements:true,
				removeTagWhitespace:true,
				collapseWhitespace:true,
			},			
			title:'webpack is pretty good',
			date:new Date(),
			chunks:['main'],
			inlineSource: '.(js|css)$'*/

		}),
		/*new htmlWebpackPlugin({
			filename:"login.html",
			template:'login.html',
			inject:'body',			
			minify:{
				removeComments:true,
				removeEmptyElements:true,
				removeTagWhitespace:true,
				collapseWhitespace:true,
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
				removeTagWhitespace:true,
				collapseWhitespace:true,
			},
			chunks:['a'],
			inlineSource: '.(js|css)$'

		}),

		new htmlWebpackPlugin({
			filename:"b.html",
			template:'b.html',
			inject:'body',
			minify:{
				removeComments:true,
				removeEmptyElements:true,
				removeTagWhitespace:true,
				collapseWhitespace:true,
			},
			chunks:['b'],
			inlineSource: '.(js|css)$'


		}),

		new htmlWebpackPlugin({
			filename:"c.html",
			template:'c.html',
			inject:"body",
			minify:{
				removeComments:true,
				removeEmptyElements:true,
				removeTagWhitespace:true,
				collapseWhitespace:true,
			},
			chunks:['c'],
			inlineSource: '.(js|css)$'			


		}),*/
		new HtmlWebpackInlineSourcePlugin(),
	]

}