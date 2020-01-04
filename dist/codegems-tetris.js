var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement, css, customElement, property } from "lit-element";
let CodegemsTetris = class CodegemsTetris extends LitElement {
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
        this.blockSize = this.config.width / 10;
        this.drawStage();
        // this.ctx.beginPath();
        // this.ctx.arc(95, 50, 40, 90, 2 * Math.PI);
        // this.ctx.lineWidth = 5;
        // this.ctx.fillRect(10, 10, 10, 10);
        // this.ctx.strokeStyle = "#00c0FF";
        // this.ctx.stroke();
        // this.ctx.closePath();
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
        this.ctx.rect(2, 2, this.config.width - 4, this.config.height - 4);
        // this.ctx.rect(0, 0, this.config.width, this.config.height);
        this.ctx.stroke();
        this.drawBlock(1, 1);
        this.drawBlock(1, 2);
        this.drawBlock(1, 3);
        // this.drawBlock(2, 3);
        this.drawMenu();
    }
    drawMenu() {
        this.drawText(10, 50, "NEW GAME <");
    }
    drawText(x, y, text) {
        this.ctx.fillStyle = this.config.color;
        this.ctx.font = "18px monospace";
        this.ctx.fillText(text, x, y, this.config.width);
        this.ctx.stroke();
    }
    drawBlock(x, y) {
        this.ctx.beginPath();
        this.ctx.rect(x * this.blockSize, y * this.blockSize, this.blockSize, this.blockSize);
        this.ctx.stroke();
    }
    render() {
        return html `
			<canvas
				width="${this.config.width}"
				height="${this.config.height}"
			></canvas>
		`;
    }
};
// styles
CodegemsTetris.styles = css `
		:host {
			display: block;
			width: 100%;
			height: 100%;
		}
	`;
__decorate([
    property()
], CodegemsTetris.prototype, "disabled", void 0);
__decorate([
    property()
], CodegemsTetris.prototype, "canvas", void 0);
__decorate([
    property()
], CodegemsTetris.prototype, "ctx", void 0);
__decorate([
    property()
], CodegemsTetris.prototype, "config", void 0);
CodegemsTetris = __decorate([
    customElement("codegems-tetris")
], CodegemsTetris);
export { CodegemsTetris };
//# sourceMappingURL=codegems-tetris.js.map