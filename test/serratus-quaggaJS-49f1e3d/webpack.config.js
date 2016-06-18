var webpack = require('webpack'),
    MyUmdPlugin = require('./plugins/umd'),
    path = require('path');

module.exports = {
    entry: [
        './src/quagga.js'
    ],
    devtool: 'inline-source-map',
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: path.resolve(__dirname),
        alias: {
            'input_stream$': 'src/input/input_stream',
            'frame_grabber$': 'src/input/frame_grabber'
        }
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'quagga.js'
    },
    devServer: {
        contentBase: './',
        hot: true
    },
    plugins: [
        new MyUmdPlugin({
            library: 'Quagga'
        }),
        new webpack.DefinePlugin({
            ENV: require(path.join(__dirname, './env/', process.env.BUILD_ENV))
        })
    ]
};
