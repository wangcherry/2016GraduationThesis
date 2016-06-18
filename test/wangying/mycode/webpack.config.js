module.exports = {
    entry: {
    	index: './src/main/webapp/scripts/index.js'
    },
    output: {
    	filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        path: 'dist/'
    }
};