import { checkColor } from "./normal.js";

export default class DrawState {
  constructor(doms) {
    // freePen 自由绘制
    // eraser 橡皮擦
    this.drawMode = "freePen";
    // 画笔粗细
    this.drawWidth = 4;
    // 画笔颜色
    this.drawColor = "#000000";
    // 是否绘制正在绘制
    this.boolDraw = false;
    this.modes = ["freePen", "eraser", "lineDash", "text"];
    this.ctx = doms.ctx_draw;
    this.init();
  }
  /**
   * 画笔状态赋给canvas
   */
  init() {
    this.ctx.lineWidth = this.drawWidth;
  }
  changeMode(mode) {
    if (this.modes.indexOf(mode) < 0) {
      console.error("非正确的绘制模式");
      return;
    }
    this.drawMode = mode;
  }
  changeWidth(width) {
    if (typeof width === "number") {
      this.drawWidth = width > 0 ? width : 1;
      this.ctx.lineWidth = width > 0 ? width : 1;
    } else {
      console.error("输入正确的数字");
    }
  }
  changeColor(color) {
    if (checkColor(color)) {
      this.ctx.strokeStyle = color;
      this.ctx.fillStyle = color;
      this.drawColor = color;
    } else {
      console.error("传入#,rgb,argb格式颜色");
    }
  }
  changeLineStyle(options) {
    const lineCap = ["butt", "round", "square"];
    const lineJoin = ["round", "bevel", "miter"];
    if (options.lineCap && lineCap.indexOf(options.lineCap) >= 0)
      ctx.lineCap = options.lineCap;
    if (options.lineJoin && lineJoin.indexOf(options.lineJoin) >= 0)
      ctx.lineJoin = options.lineJoin;
  }
}
