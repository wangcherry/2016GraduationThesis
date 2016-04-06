module.exports = {
    entry: {
    	index: './src/scripts/index.js'
    },
    output: {
    	filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        path: 'dist/'
    }
};