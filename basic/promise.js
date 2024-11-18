const p1 = Promise.resolve('123');
const p2 = Promise.resolve('223');
const p3 = Promise.resolve('3334');
const p4 = Promise.resolve('4445');
// Promise.all([p1, p2, p3, p4])
//         .then((arr) => {
//             console.log(arr);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//         .finally((data) => {
//             console.log('asdasd', data);
//         });
Promise.race([p1, p2, p3, p4])
        .then((arr) => {
            console.log(arr);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally((data) => {
            console.log('asdasd', data);
        });