const path = require("path");

module.exports = {
	context: __dirname,
	entry: "./src/codegem-tetris.ts",
	devtool: "inline-source-map",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				include: [path.resolve(__dirname, "src")]
				// exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [".ts", ".js"],
		modules: ["node_modules"]
	},
	output: {
		filename: "codegem-tetris-bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	devServer: {
		open: true,
		contentBase: "./",
		publicPath: "./"
		// compress: true,
		// port: 8089
	}
};
