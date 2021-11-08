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
    // 存储画布
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
    const img = new Image();
    img.src = image;
    img.onload = () => {
      this.clearCanvas(ctx);
      ctx.drawImage(img, 0, 0, this.width, this.height);
    };
  }
  imortImage(file){
    const fileReader = new FileReader();
    const base64 = fileReader.readAsDataURL(file);
    thiis.drawImage(base64,this.canvas_base);
    
  }
  // 清空画布
  clearCanvas(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
  }
  
}
