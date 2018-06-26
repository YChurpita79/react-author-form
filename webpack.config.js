
const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const devserver = require("./webpack/devserver");
const styl = require ("./webpack/styl");
const css = require ("./webpack/css");
const extractCSS = require ("./webpack/css.extract");
const uglifyJS = require ("./webpack/js.uglify");
const InlineEnvironmentVariablesPlugin = require("inline-environment-variables-webpack-plugin");
const loadjsx = require("./webpack/loadjsx");

const PATHS= {
	source: path.join(__dirname,"src/app/"),
	build: path.join(__dirname,"www/js/")
};

const common = merge([
	{

		entry: {
			"index": ["babel-polyfill", PATHS.source + "client.js"]
		},

		output: {
			path: PATHS.build,
			filename: "[name].min.js",
			publicPath: "/../js/",
		},

		devtool: "source-map",
		devServer:{
			contentBase: "./www"
		},

		module: {
			loaders: [
				{ test: /jquery-mousewheel/, loader: "imports?define=>false&this=>window" },
				{ test: /malihu-custom-scrollbar-plugin/, loader: "imports?define=>false&this=>window" }
			]
		},

		plugins: [

			new webpack.optimize.CommonsChunkPlugin({
				name: "common",
				children: true,
				async: true,
			}),

			new webpack.ProvidePlugin({Debug: "react-component-debug"}),

			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"window.jQuery": "jquery",
				"window.$": "jquery"
			}),

			new InlineEnvironmentVariablesPlugin({ NODE_ENV: "production"})
		]}
]);


module.exports = function(env) {
	if (env ==="production"){
		return merge([
			common,
			loadjsx(),
			extractCSS(),
			uglifyJS()
		]);
	}

	if (env === "development"){
		return merge([
			common, 
			devserver(),
			loadjsx(),
			css(),
			styl()
		]);
	}
};

 
