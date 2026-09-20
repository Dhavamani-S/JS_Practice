// "use strict"; // Strict mode syntax

// 1 . this in global space
console.log(this); // window object or globalObject

// 2. this inside a function
function fun() {
    console.log(this); // window object or globalObject when non strict mode and undefined when strict mode is enabled
}
fun();

// this keyword value depends on how the function is called.
fun(); //undefined when strct mode is enabled and window object or globalObject when non strict mode
window.fun(); //window object always

// 3. this inside a method
const obj = {
    a : 10,
    x : function() {
        console.log(this); // obj it refers to the object which is calling the function
    }
};

obj.x();


// 4. this inside a nested function
console.log("Nested function");
const obj1 = {
    a : 10,
    x : function() {
        console.log(this);
        function y() {
            console.log(this); // window object or globalObject when non strict mode and undefined when strict mode is enabled
        }
        y();
    }
}
obj1.x();

// 5. call , apply and bind methods (sharing methods between objects)
const student1 = {
    name : "Dhava",
    printName: function() {
        console.log(this.name);
    }
};

student1.printName(); // Dhava

const student2 = {
    name : "Ruth",
};

student1.printName.call(student2); // Ruth    value of this = student2

// call and apply methods are immediately executes the function and used
//to invoke a function with a specific this value and arguments. 
// The difference between call and apply is that call takes arguments 
// separately, while apply takes an array of arguments.


function greet(city,country) {
    console.log(`Hello ${this.name} from ${city}, ${country}`);
}

// const person = {name : "Dhava"};
function person(){
    name : "Dhava";
};

// example for call
greet.call(person,"Tiruppur","India"); // Hello Dhava from Tiruppur, India

// example for apply
greet.apply(person,["Tiruppur","India"]); // Hello Dhava from Tiruppur, India

// bind method returns a new function, allowing you to pass in a this array and any number of arguments. 
// The difference between bind and call/apply is that bind does not immediately execute the function.

// example for bind
const newGreet = greet.bind(person,"Tiruppur","India");
newGreet(); // Hello Dhava from Tiruppur, India

//6. this inside arrow function

const obj2 = {
    a : 30,
    x : () => {
        console.log(this); // window object or globalObject when non strict mode and undefined when strict mode is enabled
    }
}

obj2.x();

// 7.this inside nested arrow function

const obj3 = {
    a : 50,
    x : function() {
        console.log(this); 
        // Enclosing lexical context of an arrow function is the this value of the function in which it is defined.
        const y = () => {
            console.log(this);
        }
        y();
    },
};
obj3.x();

// 8.this inside DOM => reference to HTMLelement
// inside HTML page