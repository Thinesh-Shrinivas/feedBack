const minCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ()=>({
    output:{
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[minCssExtractPlugin.loader,"css-loader"]
            }
        ]
},
    plugins:[new minCssExtractPlugin()]
});