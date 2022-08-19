const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports={
    // entry:'./src/index.js',
    entry:{
        index:'./src/index.js',
        print:'./src/print.js',
    },
    plugins:[
        new BundleAnalyzerPlugin({
            analyzerPort: 8889, // 指定端口号
            openAnalyzer: false,
        }),
        new HtmlWebpackPlugin({
            title:'管理输出1',
        })
    ],
    output:{
        // filename:'main.js',
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        clean:true
    }
}