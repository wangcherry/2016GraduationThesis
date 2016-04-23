module.exports = {
    entry: {
    	index: './src/scripts/index.js',
        demo: './src/scripts/demo.js'
    },
    output: {
    	filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        path: 'dist/'
    },
    devServer: {
    	proxy: {
		  	'/checkdrug/check/*': {
			    target: 'http://222.24.63.100:9149',
			    secure: false
		  	},
		  	'/checkdrug/admin/*':{
			    target: 'http://222.24.63.100:9149',
			    secure: false
		  	}
		}
    }
};