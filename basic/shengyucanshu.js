function getSum() {
    let re = 0;
    for(let i= 0;i<arguments.length;i++) {
        re += arguments[i];
    }
    return re;
}
function getSum2(...arr) {
    return arr.reduce((r,a) => r+a)
}
const a = getSum2(1,2,2,2,2,2,2);
console.log(a);