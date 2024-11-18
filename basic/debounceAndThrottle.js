function debounce(fn, time) {
    let timeId = null;
    return function() {
        if (timeId) {
            clearTimeout(timeId)
        }
        timeId = setTimeout(() => {
            fn.apply(this, arguments);
        }, time);
    }
}
const fn = () => {
    console.log("OOOKKKK");
}
const dfn = debounce(fn, 1000);
dfn();
dfn();
dfn();
function throttle(fn, time) {
    let timeId;
    let last;
    return function() {
        let now =+ new Date();
        if (last && now < last + time) {
            clearTimeout(timeId);
            timeId = setTimeout(() => {
                last = now;
                fn.apply(this, arguments);
            }, time);
        } else {
            last = now;
            fn.apply(this, arguments);
        }
    }
}
function throttle2(fn, time) {
    let timeId, last;
    return function() {
        const now = new Date().getTime();
        if (last && now < last + time) {
            clearTimeout(timeId);
            timeId = setTimeout(() => {
                last = now;
                fn.apply(this, arguments);
            }, time);
        } else {
            last = now;
            fn.apply(this, arguments);
        }
    }
}