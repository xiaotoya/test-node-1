
function debounce(func, delay) {
    let timer = null;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    }
}
function f1(a,b) {
    console.log("result: ", a+b);
}
const a = debounce(f1, 1000);

setTimeout(() => {
    a(1, 2);
}, 500);
setTimeout(() => {
    a(1, 2);
}, 500);
setTimeout(() => {
    a(1, 2);
}, 500);

function createCounter() {
    let count = 0;
    return function() {
      return count++;
    };
  }
   
  const counter = createCounter();
  console.log(counter()); // 返回 0
  console.log(counter()); // 返回 1