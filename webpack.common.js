const path = require('path');

module.exports = {
	entry : "./src/index.js",
	output : {
		path : path.resolve(__dirname, "build"),
		filename: "[name].bundle.js"
	},

	module: {
        rules: [
            {
                test: /\.js$/, use: ['babel-loader']
            }
        ]
    }
}

