export function initEvent(doms, state,storage) {
  // PC
  doms.canvas_draw.onmousedown = (e) => mouseDown(e, doms.ctx_draw, state);
  doms.canvas_draw.onmousemove = (e) => mouseMove(e, doms.ctx_draw, state);
  doms.canvas_draw.onmouseup = (e) => mouseUp(e, doms.ctx_draw, state,storage);
  doms.canvas_draw.onmouseleave = (e) => mouseUp(e, doms.ctx_draw, state,storage);
  // 移动端
  doms.canvas_draw.ontouchstart = (e) => mouseDown(e, doms.ctx_draw, state);
  doms.canvas_draw.ontouchmove = (e) => mouseMove(e, doms.ctx_draw, state);
  doms.canvas_draw.ontouchend = (e) => mouseUp(e, doms.ctx_draw, state,storage);
}

function mouseDown(e, ctx_draw, state) {
  ctx_draw.beginPath();
  const x = e.clientX;
  const y = e.clientY;
  ctx_draw.moveTo(x, y);
  state.boolDraw = true;
}

function mouseMove(e, ctx_draw, state) {
  if (state.boolDraw) {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    ctx_draw.lineTo(x, y);
    ctx_draw.stroke();
  }
}
function mouseUp(e, ctx_draw, state,storage) {
  ctx_draw.closePath();
  state.boolDraw = false;
  storage.add()
}
function toBase64(ctx_draw){
  
}

