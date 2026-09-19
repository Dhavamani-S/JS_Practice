// Here Temporal Dead Zone (TDZ) is the time between the 
// entering of the scope and the variable declaration. 
// In this case, we are trying to access the variable 'a' before 
// it has been declared and initialized, which results in a ReferenceError.
  
// console.log(a);
// let a = 10;


         //  we can access variable 'b' before its declaration because of hoisting.
// console.log(b);
// var b = 20;
// console.log(b);

        // Shadowing
let b = 100;
{
    var a = 200;
    let b = 300;
    
}
console.log(b);

let c = 20;
function outer(){
    var c = 30;
    console.log(c);
}
console.log(c);
outer();

        // Closure
function x(){
    var a = 10;
    return function y(){
        console.log(a);
        console.log("Hello");
    }
}

const z = x();
console.log(z);
z();

        // setTimeout

// function fun(){
//     var i = 23;
//     setTimeout(function(){
//         console.log(i);
//     },3000);
//     console.log("Namaste JavaScript");
// }
// fun();

// function fun1(){
//     for(var i = 0; i <= 5; i++){
//         setTimeout(function() {
//             console.log(i);
//         },i*1000)
//     }
//     console.log("Namaste JavaScript");
// }
// fun1();

// function fun2(){
//         for(var i = 0; i <= 5; i++){
//             function close(i){
//                 setTimeout(function() {
//                     console.log(i);
//                 },i*1000)
//             }
//             close(i);
//             console.log("Namaste JavaScript");
//     }
// }

// fun2();

// Function statements or Function Declarations
function sum(a,b){
    return a+b;
}
console.log(sum(2,3));

// Function Expressions
const sum1 = function(a,b){
    return a+b;
}
console.log(sum1(9,5));

// Anonymous Function
//  we can't simply call an anonymous function because it doesn't have a name.
// function (){
    
// }

// Named Function Expressions
console.log("Named function expression : ");
const sum2 = function add(a,b){
    return a+b;
}

console.log(sum2(5,6));
// console.log(add(5,6)); // ReferenceError: add is not defined

function sub(a,b) {
    return a-b;
}

const sub1 = sub(7,3);
console.log(sub1);
console.log(sub(9,3));

// map
// It map each and every element of an array to a new array or function and returns the new array.
const num = [1,2,3,4,5];

// function double(num){
//     return num * 2;
// }
// const output = num.map(double);
// console.log(output);

const op = num.map(function double(num){
    return num * 2;
});
console.log(op);

// filter
// It filters the elements of an array based on a condition and 
// returns a new array with the elements that satisfy the condition.
const res = num.filter(function even(num){
    return num%2 == 0;
});

console.log(res);

// reduce
// It reduces the array to a single value by applying a function to each element of the array.
const sum3 = num.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
},0);

console.log(sum3);