const a = [{
    f:1,
    b:2
}];
const [{f,b}] = a;
console.log(f,b);

const e = {asd: 3, fgh:4};
const {asd,fgh} = e;
console.log(asd,fgh);
// 多级解构
const pige = {
    a1: {
        b1:1,
        v1:34
    }
};
const {a1:{b1,v1}} = pige;
console.log(b1, v1);