var path = require('path');
var webpack = require('webpack');
var glob = require('glob'); // 用于读取webpack入口目录文件
//插件
var CleanPlugin = require('clean-webpack-plugin');//webpack插件，用于清除目录文件
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
//var HtmlwebpackPlugin = require("html-webpack-plugin");
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var getFiles = function () {
    var files = {};
    //读取开发目录,并进行路径裁剪
    glob.sync('./src/pages/*.js')
            .forEach(function (name) {
                var start = name.indexOf('pages/') + 6;
                var n = name.slice(start);
                n = n.slice(0, n.lastIndexOf('.'));
                //files[n] = [name, 'webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080'];
                files[n] = [name, 'webpack/hot/only-dev-server'];
            });
    console.log(files);
    return files;
};

var entrys = getFiles();
var chunks = Object.keys(entrys);
console.log(entrys);
//entry: entrys,
module.exports = {
    entry: {
        // userSetting: ['./src/pages/userSetting.js', 'webpack/hot/only-dev-server']
        todoMvc: ['./src/pages/todoMvc.js', 'webpack/hot/only-dev-server']
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: '/build/',
        filename: '[name].js'
    },
    devServer: {
        //historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './demo/',
        stats: {colors: true}
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.less'],
        alias: {}
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                        'style',
                        'css'
                )
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader","css-loader!less-loader")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader","css-loader!sass-loader")
            },
            {
                test: /\.js[x]?$/,
                loader: ['babel'],
                query: {
                    presets: ['react', 'es2015']
                },
                exclude: ['/node_modules/']
            }
        ]
    },
    plugins: [
        new CleanPlugin(['build']),
        /*new HtmlwebpackPlugin({
         title: "webpack"
         }),*/
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),
        new ExtractTextPlugin('[name].css'),
        /*new CommonsChunkPlugin({
         name: 'vendors',
         chunks: chunks,
         minChunks: chunks.length
         }),*/
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
    //devtool: "source-map"
};
/*

 ,
 {
 test: /.less$/,
 exclude: ['/node_modules/'],
 loader: ExtractTextPlugin.extract(
 'style',
 'css?-autoprefixer&sourceMap!less'
 )
 },
 {
 test: /.scss/,
 loader: ExtractTextPlugin.extract(
 'style',
 'css?-autoprefixer&sourceMap!scss'
 )
 }*/
