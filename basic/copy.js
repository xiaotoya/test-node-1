const a = [1,2,4,5,6,7,78];
const b = [5,7,8,345,345,3456,546];
console.log(Array.from(new Set(a.concat(b))));
