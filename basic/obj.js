const o1 = {
    name: 'o1'
};
const o2 = new Object({name: 'asd'});
function Oo(name) {
    this.name = name;
}
const o3 = new Oo('o3');
console.log(o1, o2, o3);
const o4 = Object.assign(o3, {r: "v"});
console.log(o4);
const o5 = {
    ...o4,
    p: "asd"
};
console.log(o5);
const arr = [1,2,3,4,556,6,7,8,9,99];
console.log(arr.reduce((a,b) => a+b,0));