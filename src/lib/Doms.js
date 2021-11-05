export default class Doms{
  constructor(elementId){
    this.initCanvas(elementId);
  }
  // 初始化
  initCanvas(elementId) {
    const parentDiv = document.getElementById(elementId);
    if (!parentDiv) {
      console.error("请传入正确的Div id");
      return;
    }  
    // 存储画布
    this.canvas_storage = document.createElement("canvas");
    this.setStyle(this.canvas_storage,parentDiv)
    this.ctx_storage = this.canvas_storage.getContext('2d');
    // 底图画布
    this.canvas_base = document.createElement("canvas");
    this.setStyle(this.canvas_base,parentDiv)
    this.ctx_base = this.canvas_base.getContext('2d');
    // 绘制画布
    this.canvas_draw = document.createElement("canvas");
    this.setStyle(this.canvas_draw,parentDiv)
    this.ctx_draw = this.canvas_draw.getContext('2d');
    // 添加至Div中，并设置样式
    parentDiv.appendChild(this.canvas_storage);
    parentDiv.appendChild(this.canvas_base);
    parentDiv.appendChild(this.canvas_draw);
  }
  // 设置基本样式
  setStyle(canvas,parentDiv){
    canvas.width = parentDiv.clientWidth;
    canvas.height = parentDiv.clientHeight;
    canvas.style.position="absolute";
  }
}