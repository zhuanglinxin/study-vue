const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        open: true,
        port: 3000,
        contentBase: 'src',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            { test: /\.scss$/, use:[ 'style-loader','css-loader','sass-loader']},
            { test: /\.(jpg|png|gif|bmp|jpeg)$/,        
                use:[{
                    loader:'url-loader',
                    options: {
                        limit:500,
                        outputPath: 'images/',
                        name:'[name].[ext]'
                        //publicPath:output,

                    }
                }]      
            }
        ]
    },
    resolve: {
        alias: {
            //  'vue$' : 'vue/dist/vue.js'
        }
    }, 
        performance: {
            hints: false
        }
    


}