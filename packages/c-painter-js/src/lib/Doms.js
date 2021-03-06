import { toBase64 } from "./normal.js";

export default class Doms {
  constructor(elementId) {
    this.initCanvas(elementId);
  }
  // 初始化
  initCanvas(elementId) {
    const parentDiv = document.getElementById(elementId);
    if (!parentDiv) {
      console.error("请传入正确的Div id");
      return;
    }
    // 高宽
    this.width = parentDiv.clientWidth;
    this.height = parentDiv.clientHeight;
    // 存储画布-用于导出
    this.canvas_storage = document.createElement("canvas");
    this.setStyle(this.canvas_storage, parentDiv);
    this.ctx_storage = this.canvas_storage.getContext("2d");
    // 底图画布
    this.canvas_base = document.createElement("canvas");
    this.setStyle(this.canvas_base, parentDiv);
    this.ctx_base = this.canvas_base.getContext("2d");
    // 绘制画布
    this.canvas_draw = document.createElement("canvas");
    this.setStyle(this.canvas_draw, parentDiv);
    this.ctx_draw = this.canvas_draw.getContext("2d");
    // 添加至Div中，并设置样式
    parentDiv.appendChild(this.canvas_storage);
    parentDiv.appendChild(this.canvas_base);
    parentDiv.appendChild(this.canvas_draw);
  }
  // 设置基本样式
  setStyle(canvas, parentDiv) {
    canvas.width = parentDiv.clientWidth;
    canvas.height = parentDiv.clientHeight;
    canvas.style.position = "absolute";
  }
  // 绘制图片
  drawImage(image, ctx) {
    if(typeof image === 'string'){
      const img = new Image();
      img.src = image;
      img.onload = () => {
        this.clearCanvas(ctx);
        ctx.drawImage(img, 0, 0, this.width, this.height);
      };
    } else {
      ctx.drawImage(image, 0, 0, this.width, this.height);
    }
  }
  /**
   * 绘制矩形
   * @param {*} ctx 
   * @param {*} x 
   * @param {*} y 
   * @param {*} width 
   * @param {*} height 
   * @param {*} type fill stroke 填充、边框 
   */
  drawRect(ctx,x,y,width,height,type){
    if(type==='fill'){
      ctx.fillRect(x, y, width, height) 
    } else {
      strokeRect(x, y, width, height)
    }
  }
  // 绘制圆角矩形
  roundedRect(ctx, x, y, width, height, radius){
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
    ctx.lineTo(x + width - radius, y + height);
    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    ctx.lineTo(x + width, y + radius);
    ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.quadraticCurveTo(x, y, x, y + radius);
    ctx.stroke();
  }
  // 清空画布
  clearCanvas(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
  }

  imortImage(file){
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload=(e)=>{
      this.drawImage(e.currentTarget.result,this.ctx_base);
    }
  }
  // 导出图片
  exportImage(){
    this.clearCanvas(this.ctx_storage);
    this.drawImage(this.canvas_base,this.ctx_storage);
    this.drawImage(this.canvas_draw,this.ctx_storage);
    return toBase64(this.canvas_storage);
  }
  
}
