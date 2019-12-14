const path = require("path");

module.exports = {
	entry: "./src/codegem-tetris.ts",
	// devtool: "inline-source-map",
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
		extensions: [".ts", ".js"]
	},
	output: {
		filename: "codegem-tetris-bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	devServer: {
		contentBase: "demo",
		open: true
		// contentBase: path.join(__dirname, "demo"),
		// compress: true,
		// port: 8089
	}
};
