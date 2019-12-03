import { html, LitElement, css, customElement, property } from "lit-element";

@customElement("canvas-snake")
export class CanvasSnake extends LitElement {
	// styles
	static styles = css`
		:host {
			background: red;
		}
	`;

	@property()
	disabled: boolean;
	@property()
	canvas: HTMLCanvasElement;
	@property()
	context: CanvasRenderingContext2D;

	constructor() {
		super();
		this.disabled = false;
	}

	firstUpdated() {
		this.canvas = this.shadowRoot.querySelector("canvas");
		console.log(this.canvas);

		this.context = this.canvas.getContext("2d");
		this.context.beginPath();
		this.context.arc(95, 50, 40, 0, 2 * Math.PI);
		this.context.stroke();
	}

	connectedCallback() {
		super.connectedCallback();
		console.log("%c CONNECTED", "font-size: 24px; color: green;");
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		console.log("%c DISCONNECTED", "font-size: 24px; color: red;");
	}

	render() {
		return html`
			<h1>WORKS !!!</h1>
			<canvas></canvas>
		`;
	}
}
// window.customElements.define("canvas-snake", CanvasSnake);
