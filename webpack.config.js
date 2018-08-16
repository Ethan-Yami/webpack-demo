var path = require('path');
module.exports = {
	mode: 'development',
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js'
	},
	output: {

		path: __dirname +"/dist/js",
		filename: "[name].js"
	}
}