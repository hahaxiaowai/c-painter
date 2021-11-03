export function initEvent(doms, state,storage) {
  // PC
  doms.canvas_draw.onmousedown = (e) => penDown(e, doms.ctx_draw, state);
  doms.canvas_draw.onmousemove = (e) => penMove(e, doms.ctx_draw, state);
  doms.canvas_draw.onmouseup = (e) => penUp(e, doms, state,storage);
  doms.canvas_draw.onmouseleave = (e) => penUp(e, doms, state,storage);
  // Mobile
  doms.canvas_draw.ontouchstart = (e) => penDown(e, doms.ctx_draw, state);
  doms.canvas_draw.ontouchmove = (e) => penMove(e, doms.ctx_draw, state);
  doms.canvas_draw.ontouchend = (e) => penUp(e, doms, state,storage);
}

function penDown(e, ctx_draw, state) {
  ctx_draw.beginPath();
  const x = e.clientX;
  const y = e.clientY;
  ctx_draw.moveTo(x, y);
  state.boolDraw = true;
}

function penMove(e, ctx_draw, state) {
  if (state.boolDraw) {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    ctx_draw.lineTo(x, y);
    ctx_draw.stroke();
  }
}
function penUp(e, doms, state,storage) {
  // 如果是未绘制状态则中断执行
  if(!state.boolDraw) return
  doms.ctx_draw.closePath();
  state.boolDraw = false;
  storage.add(toBase64(doms.canvas_draw))
  console.log(storage)
}
function toBase64(canvas_draw){
  return canvas_draw.toDataURL()
}

