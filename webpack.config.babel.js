import webpack from "webpack";
//输出index.html插件
import HtmlWebpackPlugin from "html-webpack-plugin";
//每次构建前，清理输出目录插件
import CleanWebpackPlugin from "clean-webpack-plugin";

module.exports = {
    entry: {
        index: `${__dirname}/src/index.js`
    },
    //方便控制台查看显示的错误
    devtool: "inline-source-map",
    //通过webpack-dev-server在localhost:8080下建立服务，将output目录下的文件作为可访问文件。
    devServer: {
        //告诉dev-server，我们在使用HMR
        hot: true,
        contentBase: `${__dirname}/output/`,
        publicPath: "/"
    },
    output: {
        path: `${__dirname}/output/`,
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            // {
            //     test: /\.js$|\.jsx$/,
            //     use: ["eslint-loader"],
            //     exclude: /^node_modules$/
            // },
            {
                //一个正则表达式，将加载器和文件匹配
                test: /\.js$|\.jsx$/,
                //使用babel-loader加载器，编译成浏览器可以阅读的 JavaScript
                use: ["babel-loader"],
                exclude: /^node_modules$/
            }
        ]
    },
    //插件配置
    plugins: [
        new CleanWebpackPlugin(["output"]),
        new HtmlWebpackPlugin({
            title: "Output Management"
        }),
        //启用模块热替换
        new webpack.HotModuleReplacementPlugin()
    ]
};