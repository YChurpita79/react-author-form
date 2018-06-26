module.exports = function() {
  return {
      module:{
        rules: [
            {
                  test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                    loader: "file-loader",
                    options: {
                    name: "../img/[name].[ext]"
                   },
                },
            ]
        }
    };
};