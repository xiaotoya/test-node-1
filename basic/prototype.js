function Star(name) {
    this.name = name;
}
Star.prototype.sing = function() {
    console.log('Sing', this.name);
}
Star.dance = function() {
    // this指向构造函数s
    console.log('this, ', this === Star);
}
const L = new Star('liu');
const G = new Star('Guo');
L.sing();
Star.dance();
// 构造函数和原型对象之间互有引用
console.log(Star.prototype.constructor === Star);
// 实例指向原型对象
console.log(L.__proto__ === Star.prototype);
console.log(L.constructor === Star);