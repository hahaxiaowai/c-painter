import { initCanvas } from "./initFunction/dom.js";
import { initVariable } from "./initFunction/variable.js";
import { initEvent } from "./initFunction/event.js";
export default class Painter {
  constructor(elementId) {
    // 初始化Dom元素
    // canvas_storage,ctx_storage,canvas_base,ctx_base,canvas_draw,ctx_draw
    this.doms = initCanvas(elementId);
    // 初始化变量池
    const { storage, state } = initVariable();
    this.storage = storage;
    this.state = state;
    // 初始化事件
    initEvent(this.doms,this.state,this.storage);
  }
  next(){
    this.storage.next()
  }
  prev(){
    this.storage.prev()
  }
}
