import { toBase64 } from "./normal.js";
export default class Event {
  constructor(doms, state, storage) {
    this.initEvent(doms, state, storage);
  }
  initEvent(doms, state, storage) {
    // PC
    doms.canvas_draw.onmousedown = (e) => this.penDown(e, doms.ctx_draw, state);
    doms.canvas_draw.onmousemove = (e) => this.penMove(e, doms.ctx_draw, state);
    doms.canvas_draw.onmouseup = (e) => this.penUp(e, doms, state, storage);
    doms.canvas_draw.onmouseleave = (e) => this.penUp(e, doms, state, storage);
    // Mobile
    doms.canvas_draw.ontouchstart = (e) =>
      this.penDown(e, doms.ctx_draw, state);
    doms.canvas_draw.ontouchmove = (e) => this.penMove(e, doms.ctx_draw, state);
    doms.canvas_draw.ontouchend = (e) => this.penUp(e, doms, state, storage);
  }
  penDown(e, ctx_draw, state) {
    state.boolDraw = true;
    const x = e.layerX;
    const y = e.layerY;
    switch (state.drawMode) {
      case "freePen":
        // Path2D
        ctx_draw.beginPath();
        ctx_draw.moveTo(x, y);
        break;
      case "eraser":
        ctx_draw.clearRect(
          x - state.drawWidth / 2,
          y - state.drawWidth / 2,
          state.drawWidth,
          state.drawWidth
        );
        break;

      default:
        break;
    }
  }
  penMove(e, ctx_draw, state) {
    if (state.boolDraw) {
      e.preventDefault();
      const x = e.layerX;
      const y = e.layerY;
      switch (state.drawMode) {
        case "freePen":
          ctx_draw.lineTo(x, y);
          ctx_draw.stroke();
          break;
        case "eraser":
          ctx_draw.clearRect(
            x - state.drawWidth / 2,
            y - state.drawWidth / 2,
            state.drawWidth,
            state.drawWidth
          );
          break;

        default:
          break;
      }
    }
  }
  penUp(e, doms, state, storage) {
    // 如果是未绘制状态则中断执行
    if (!state.boolDraw) return;
    switch (state.drawMode) {
      case "freePen":
        doms.ctx_draw.closePath();
        break;

      default:
        break;
    }
    state.boolDraw = false;
    storage.add(toBase64(doms.canvas_draw));
  }
}
