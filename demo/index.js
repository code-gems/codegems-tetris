import { render, html } from "../node_modules/lit-html/lit-html.js";

const config = {
	width: 300,
	height: 600,
	color: "#252525",
	bgColor: "#bbff4f"
};

render(
	html`
		<codegems-tetris .config="${config}"></codegems-tetris>
	`,
	document.getElementById("demo")
);
