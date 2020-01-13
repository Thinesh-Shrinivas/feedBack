const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpackMerge = require('webpack-merge');

const configData = env =>require(`./config/webpack.${env}`)(env);

module.exports= ({mode,presets}) =>{
    return webpackMerge({
        mode,
        entry:'./src/index.js',
        output:{
            path: path.resolve(__dirname, 'dist'),
            filename:'bundle.js'
        },
        module: {
            rules: [
              {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader'
                }
              },
                {
                    test: /\.(png|gif|svg|jpe?g)$/,
                    use: ["url-loader"]
                }
            ]
          },
    },
    configData(mode)
    );
   
}