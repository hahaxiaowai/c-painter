 


import { toBase64 } from "./normal.js";
export default class Event{
  constructor(doms, state,storage){
    this.initEvent(doms, state,storage)
  }
  initEvent(doms, state,storage) {
    // PC
    doms.canvas_draw.onmousedown = (e) => this.penDown(e, doms.ctx_draw, state);
    doms.canvas_draw.onmousemove = (e) => this.penMove(e, doms.ctx_draw, state);
    doms.canvas_draw.onmouseup = (e) => this.penUp(e, doms, state,storage);
    doms.canvas_draw.onmouseleave = (e) => this.penUp(e, doms, state,storage);
    // Mobile
    doms.canvas_draw.ontouchstart = (e) => this.penDown(e, doms.ctx_draw, state);
    doms.canvas_draw.ontouchmove = (e) => this.penMove(e, doms.ctx_draw, state);
    doms.canvas_draw.ontouchend = (e) => this.penUp(e, doms, state,storage);
  }
  penDown(e, ctx_draw, state) {
    ctx_draw.beginPath();
    const x = e.layerX;
    const y = e.layerY;
    ctx_draw.moveTo(x, y);
    state.boolDraw = true;
  }
  penMove(e, ctx_draw, state) {
    if (state.boolDraw) {
      e.preventDefault();
      const x = e.layerX;
      const y = e.layerY;
      ctx_draw.lineTo(x, y);
      ctx_draw.stroke();
    }
  }
  penUp(e, doms, state,storage) {
    // 如果是未绘制状态则中断执行
    if(!state.boolDraw) return
    doms.ctx_draw.closePath();
    state.boolDraw = false;
    storage.add(toBase64(doms.canvas_draw))
    console.log(storage)
  }
  
}