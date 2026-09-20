// // Promise all

// const p1 = new Promise((resolve,reject) => {
//     setTimeout(()=> resolve("P1 success"),3000);
// });

// const p2 = new Promise((resolve,reject) => {
//     setTimeout(()=> resolve("P2 success"),1000);
//     // setTimeout(()=> reject("P2 fail"),1000);
// });

// const p3 = new Promise((resolve,reject) => {
//     // setTimeout(()=> resolve("P3 success"),2000);
//     setTimeout(()=> reject("P3 fail"),2000);
// });


// Promise.all([p1,p2,p3])
// .then((res) => console.log(res))
// .catch((err) => console.error(err));


// // Promise allSettled (Safest option)

// const p1 = new Promise((resolve,reject) => {
//     setTimeout(()=> resolve("P1 success"),4000);
// });

// const p2 = new Promise((resolve,reject) => {
//     // setTimeout(()=> resolve("P2 success"),1000);
//     setTimeout(()=> reject("P2 fail"),1000);
// });

// const p3 = new Promise((resolve,reject) => {
//     setTimeout(()=> resolve("P3 success"),2000);
//     // setTimeout(()=> reject("P3 fail"),2000);
// });


// Promise.allSettled([p1,p2,p3])
// .then((res) => console.log(res))
// .catch((err) => console.error(err));


// // Promise race

// const p1 = new Promise((resolve,reject) => {
//     setTimeout(()=> resolve("P1 success"),4000);
// });

// const p2 = new Promise((resolve,reject) => {
//     setTimeout(()=> resolve("P2 success"),5000);
//     // setTimeout(()=> reject("P2 fail"),1000);
// });

// const p3 = new Promise((resolve,reject) => {
//     // setTimeout(()=> resolve("P3 success"),2000);
//     setTimeout(()=> reject("P3 fail"),2000);
// });


// Promise.race([p1,p2,p3])
// .then((res) => console.log(res))
// .catch((err) => console.error(err));

// Promise any

const p1 = new Promise((resolve,reject) => {
    // setTimeout(()=> resolve("P1 success"),4000);
    setTimeout(()=> reject("P1 fail"),4000);
});

const p2 = new Promise((resolve,reject) => {
    // setTimeout(()=> resolve("P2 success"),5000);
    setTimeout(()=> reject("P2 fail"),1000);
});

const p3 = new Promise((resolve,reject) => {
    // setTimeout(()=> resolve("P3 success"),2000);
    setTimeout(()=> reject("P3 fail"),2000);
});


Promise.any([p1,p2,p3])
.then((res) => console.log(res))
.catch((err) => {
    console.error(err);
    console.log(err.errors);
});