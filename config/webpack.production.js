const minCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ()=>({
    output:{
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.(css|scss)$/,
                use:[minCssExtractPlugin.loader,"css-loader", "sass-loader"]
            }
        ]
},
    plugins:[new minCssExtractPlugin()]
});