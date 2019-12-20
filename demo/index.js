import { render, html } from "../node_modules/lit-html/lit-html.js";

const config = {
	width: 200,
	height: 400,
	color: "#252525",
	bgColor: "#bbff4f"
};

render(
	html`
		<codegems-tetris .config="${config}"></codegems-tetris>
	`,
	document.getElementById("demo")
);
