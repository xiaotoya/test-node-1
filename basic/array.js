const arr = [12,3,3,4,4,5,6,7,78,7];
console.log(typeof(arr.join(',')));
console.log(arr.join(',').prototype, arr.join(',') instanceof String);
const astr = '0123456789';
console.log(astr.substring(1,5));
console.log(astr.substring(1));
console.log(astr.includes('789'));