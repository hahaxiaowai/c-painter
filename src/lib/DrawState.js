import { checkColor } from "./normal";

export default class DrawState {
  constructor() {
    // freePen 自由绘制
    // eraser 橡皮擦
    this.drawMode = "freePen";
    // 画笔粗细
    this.drawWidth = 1;
    // 画笔颜色
    this.drawColor = "#000000";
    // 是否绘制正在绘制
    this.boolDraw = false;
    this.modes = ["freePen", "eraser"];
  }
  changeMode(mode) {
    if (this.modes.findIndex(mode) >= 0) {
      console.error("非正确的绘制模式");
      return;
    }
    this.drawMode = mode;
  }
  changeWidth(width,ctx) {
    if( typeof width === "Number"){
      this.drawWidth = width;
      ctx.lineWidth = width;
    } else {
      console.error('输入正确的数字')
    }
    

  }
  changeColor(color,ctx) {
    if(checkColor(color)) {
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      this.drawColor = color;
    } else {
      console.error('传入#,rgb,argb格式颜色')
    }
  }
}
