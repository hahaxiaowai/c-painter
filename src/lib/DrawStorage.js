export default class DrawStorage {
  constructor() {
    this.storage = [];
    this.curIndex = 0;
  }
  add(base64, index) {
    // 没有index直接添加到最后，有则将index之后的记录删掉，然后添加
    if (index) {
      const delCount = this.storage.length - index;
      this.storage.splice(index, delCount);
    }
    this.storage.push({
      index: this.storage.length ,
      image: base64,
    });
    this.curIndex = this.storage.length - 1;
  }
  next(index) {
    this.curIndex = index + 1;
    return this.storage[index + 1];
  }
  prev(index) {
    if (index) {
      this.curIndex = index - 1;
      return this.storage[index - 1];
    }
    return this.storage[0];
  }
}
