/*eslint-env node*/
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = function(paths){
    return{
        module:{
            rules:[ {
                test: /\.scss$/,
                    include: paths,
                        use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [
                           { loader: "css-loader",options: { importLoaders: 2, sourceMap: true } },
                           { loader: "postcss-loader",  options: { sourceMap: true ,plugins: [require("autoprefixer")({ browsers: ["last 2 versions"] })] }} ,
                           { loader: "resolve-url-loader", options: {sourceMap: true } },

                           { loader: "sass-loader", options: {sourceMap: true } }
                        ],
                    }),
                },
                {
                    test: /\.styl$/,
                    include: paths,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [
                            { loader: "css-loader",options: { importLoaders: 2, sourceMap: true } },
                            { loader: "postcss-loader",  options: { sourceMap: true ,plugins: [require("autoprefixer")({ browsers: ["last 2 versions"] })] }} ,
                            { loader: "resolve-url-loader", options: {sourceMap: true } },

                            { loader: "stylus-loader", options: {sourceMap: true } }
                        ],
                    }),
                },

                {
                    test: /\.css$/,
                    include: paths,
                    use: ExtractTextPlugin.extract({
                    
                        fallback: {loader:"style-loader", options:{ hmr: false}},
                        use: [
                            {loader: "css-loader", options: { importLoaders: 1  } },
                            
                            {loader: "postcss-loader",  options: { module:true, sourceMap: true, plugins: [require("autoprefixer")({ browsers: ["last 2 versions"] })] }} ,
                            {loader: "resolve-url-loader", options: { module:true, sourceMap: true } }
                       
                            ],
                    }),
                },
                 {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: "url-loader",
                options: {
                        limit: 40000
                }

            }
            ],
        },
        plugins: [
            new ExtractTextPlugin("../css/[name].css",{
            allChunks: true
        }),
        ],
    };
};