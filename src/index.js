import Doms from "./lib/Doms.js";
import DrawState from "./lib/DrawState.js";
import DrawStorage from "./lib/DrawStorage.js";
import Event from "./lib/Event.js";
export default class Painter {
  constructor(elementId) {
    // 初始化Dom元素
    // canvas_storage,ctx_storage,canvas_base,ctx_base,canvas_draw,ctx_draw
    this.doms = new Doms(elementId);
    // 初始化变量池
    // 绘制记录
    this.storage = new DrawStorage();
    // 绘制状态（画笔、橡皮擦、画笔粗细）
    this.state = new DrawState();
    // 初始化事件
    this.event = new Event(this.doms, this.state, this.storage);
  }
  next() {
    const storage = this.storage.next();
    this.doms.drawImage(storage.image, this.doms.ctx_draw);
  }
  prev() {
    const storage = this.storage.prev();
    this.doms.drawImage(storage.image, this.doms.ctx_draw);
  }
  importBaseImage(file) {
    this.doms.imortImage(file);
  }
  downImage() {
    const base64 = this.doms.exportImage();
    const aTag = document.createElement("a");
    aTag.download = "painter" + "." + "jpg";
    aTag.href = base64;
    aTag.click();
  }
  changeColor(color) {
    this.state.changeColor(color, this.doms.ctx_draw);
  }
  changeWidth(width) {
    this.state.changeWidth(width, this.doms.ctx_draw);
  }
  changeMode(mode){
    this.state.changeMode(mode)
  }
}
