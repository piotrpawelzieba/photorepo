import path from 'path';
import webpack from 'webpack';
export default {
    resolve: {
        extensions: ["", ".js", ".jsx", ".json"]
    },
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        'babel-polyfill',
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, 'src/index.js')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'latest', 'stage-2']
            }
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'latest']
            }
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass!resolve-url!sass?sourceMap'
        }, {
            test: /\.css$/,
            loaders: ['style', 'css']
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }, {
            test: /\.(jpg|png)$/,
            loader: 'file-loader',
            options: {
                limit: 25000,
            }
        }]
    }
};
