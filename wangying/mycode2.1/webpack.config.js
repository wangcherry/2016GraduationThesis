module.exports = {
    entry: {
    	index: './src/scripts/index.js'
    },
    output: {
    	filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        path: 'dist/'
    },
    devServer: {
    	proxy: {
		  	'/checkdrug/check/*': {
			    target: 'http://localhost:8083',
			    secure: false
		  	},
		  	'/checkdrug/admin/*':{
			    target: 'http://localhost:8083',
			    secure: false
		  	}
		}
    }
};