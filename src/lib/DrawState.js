export default class DrawState{
  constructor(){
    // freePen 自由绘制
    // eraser 橡皮擦
    this.drawMode = 'freePen';
    // 画笔粗细
    this.drawWidth = 1;
    // 画笔颜色
    this.drawColor = '#000000'
    // 是否绘制正在绘制
    this.boolDraw = false;
  }
  changeMode(){}
  changeWidth(){}
  changeColor(){}
}