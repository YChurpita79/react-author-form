const webpack = require("webpack");
module.exports = function(useSourceMap) {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: useSourceMap,
                compress: {
                    warnings: false ,
                    screw_ie8: true,
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true 
                },
                output: {
                    comments: false
                }
            })
        ]
    };
};
 
 