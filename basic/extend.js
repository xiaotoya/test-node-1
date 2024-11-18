function Person() {
    this.ear = 2;
    this.head = 1;
}
function Woman(name) {
    this.name = name;
}
function Man(name) {
    this.name = name;
}
Woman.prototype = new Person();
Woman.prototype.constructor = Woman;
Woman.prototype.baby = function() {
    console.log(this.name);
}
const woman = new Woman('Alina');
woman.baby();
console.log(woman.ear);
console.log(woman instanceof Person);
console.log(woman instanceof Array);
console.log(['asdadadas', 'asdasdasd'].join(',') instanceof String);
console.log('asdasda' instanceof String);
console.log(woman instanceof Object);