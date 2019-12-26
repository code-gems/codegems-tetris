const path = require("path");

module.exports = {
	context: __dirname,
	entry: ["./demo/index.js", "./dist/codegems-tetris.js"],
	devtool: "inline-source-map",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				include: [path.resolve(__dirname, "src")],
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [".ts", ".js"],
		modules: ["node_modules"]
	},
	output: {
		filename: "codegems-tetris.js",
		path: path.resolve(__dirname, "dist")
	},
	devServer: {
		open: true,
		contentBase: "demo"
		// publicPath: "dist"
		// compress: true,
		// port: 8089
	},
	watch: true
};
