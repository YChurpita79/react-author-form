module.exports = function (paths) {
	return {
		module: {
			rules: [
				{
					test: /\.scss$/,
					include: paths,
					use: [
						{loader:"style-loader", options:{ hmr: false}},
						{loader: "css-loader", options: { importLoaders: 1  }},
						{loader: "postcss-loader",  options: { module:true, sourceMap: true, plugins: [require("autoprefixer")({ browsers: ["last 2 versions"] })] }} ,
                        {loader: "stylus-loader", options: {sourceMap: true }}
					]
				},
				{
					test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
					loader: "url-loader",
					options: {
						limit: 10000
					}
				}
			]
		}
	};
};