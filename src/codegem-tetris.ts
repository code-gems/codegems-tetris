import { html, LitElement, css, customElement, property } from "lit-element";

// typings
import { TetrisConfig } from "tetris-typings";

@customElement("codegems-tetris")
export class CodegemsTetris extends LitElement {
	// styles
	static styles = css`
		:host {
			display: block;
			width: 100%;
			height: 100%;
		}
	`;

	@property()
	disabled: boolean;
	@property()
	canvas: HTMLCanvasElement;
	@property()
	ctx: CanvasRenderingContext2D;
	@property()
	config: TetrisConfig;

	constructor() {
		super();
		this.disabled = false;
		this.config = {
			width: 200,
			height: 400,
			color: "#252525",
			bgColor: "#bbff4f"
		};
	}

	firstUpdated() {
		this.canvas = this.shadowRoot.querySelector("canvas");
		this.ctx = this.canvas.getContext("2d");
		console.log(this.canvas);

		this.drawStage();

		this.ctx.beginPath();
		this.ctx.arc(95, 50, 40, 90, 2 * Math.PI);
		this.ctx.lineWidth = 5;
		this.ctx.fillRect(10, 10, 10, 10);
		this.ctx.strokeStyle = "#00c0FF";
		this.ctx.stroke();
		this.ctx.closePath();
	}

	connectedCallback() {
		super.connectedCallback();
		console.log("%c CONNECTED", "font-size: 24px; color: green;");
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		console.log("%c DISCONNECTED", "font-size: 24px; color: red;");
	}

	drawStage() {
		// fill background
		this.ctx.fillStyle = this.config.bgColor;
		this.ctx.fillRect(0, 0, this.config.width, this.config.height);

		this.ctx.beginPath();
		this.ctx.rect(0, 0, this.config.width, this.config.height);
		this.ctx.stroke();
	}

	render() {
		return html`
			<canvas
				width="${this.config.width}"
				height="${this.config.height}"
			></canvas>
		`;
	}
}
