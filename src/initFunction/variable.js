import DrawState from "../lib/DrawState.js";
import DrawStorage from "../lib/DrawStorage.js";

export function initVariable() {
  // 绘制记录
  const storage = new DrawStorage();
  // 绘制状态（画笔、橡皮擦、画笔粗细）
  const state = new DrawState();
  return { storage, state };
}
