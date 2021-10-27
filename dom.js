export function initCanvas(elementId) {
  const parentDiv = document.getElementById(elementId);
  if (!parentDiv) {
    console.error("请传入正确的Div id");
    return;
  }
  console.log(parentDiv.style)
  // 存储画布
  const canvas_storage = document.createElement("canvas");
  setStyle(canvas_storage,parentDiv)
  const ctx_storage = canvas_storage.getContext('2d');
  // 底图画布
  const canvas_base = document.createElement("canvas");
  setStyle(canvas_base,parentDiv)
  const ctx_base = canvas_base.getContext('2d');
  // 绘制画布
  const canvas_draw = document.createElement("canvas");
  setStyle(canvas_draw,parentDiv)
  const ctx_draw = canvas_draw.getContext('2d');
  // 添加至Div中，并设置样式
  parentDiv.appendChild(canvas_storage);
  parentDiv.appendChild(canvas_base);
  parentDiv.appendChild(canvas_draw);
  return {canvas_storage,ctx_storage,canvas_base,ctx_base,canvas_draw,ctx_draw}
}

function setStyle(canvas,parentDiv){
  canvas.width = parentDiv.clientWidth;
  canvas.height = parentDiv.clientHeight;
  canvas.style.position="absolute";
}