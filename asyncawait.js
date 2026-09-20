// async
// async is an keyword which is used to declare a function as asynchronous.
// async function always returns a promise. If the function returns a value, the promise will be resolved with that value (as a promise). If the function throws an exception, the promise will be rejected with that exception.
// async function getData() {
//     return "Hello World!!"
// };

// const data = getData();
// console.log(data);

// data.then(res => console.log(res));

// async and await used together to handle promises in a more elegant way. 
// await is an keyword which is used to wait for a promise to resolve or reject. It can only be used inside an async function.

// const promise = new Promise((resolve,reject) => {
//     resolve("Promised resolved");
// });

// async function getPromiseData() {
//     const res = await promise;
//     console.log(res);
// };

// getPromiseData();


const p1 = new Promise((resolve,reject) => {
    setTimeout(function (){
        resolve("First promise resolved");
    },1000);
});

const p2 = new Promise((resolve,reject) => {
    setTimeout(function (){
        resolve("Second promise resolved");
    },3000);    
});

async function getPromise1(){
    console.log("Namaste Js!!");

    const res1 = await p1;
    console.log(res1);

    const res2 = await p2;
    console.log(res2);
}

getPromise1();


// using fetch
const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
    const data = await fetch(API_URL);
    const JsonValue = await data.json();
    console.log(JsonValue);
};

getPosts();