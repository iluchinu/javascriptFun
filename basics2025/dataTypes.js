// let name= "xxxxx"
// let age= 34
// let isLoggedIn= false

//primitive || non-primitive

// 7 Types of primitive: String, Number, Boolean, Null, Undefined, Symbol(make any value to unique), BigInt

const score= 100;
const scoreValue= 100.3

const isLoggedIn= false;
const temperature= null;
const email= undefined;
let userEmail;

const id= Symbol("999");
const anotherID= Symbol("999");
// console.log(id === anotherID);

 

//non-primitive or Reference: Array, Objects, Functions 

const forEver= ["Ravi", "Krishna", "Manoj"]

let objFruits= {
    name: "Blueberry",
    color: "blue"
}

const myFunction= function(){
    console.log("Hello");
}


console.log(typeof forEver);
console.log(typeof score);
console.log(typeof isLoggedIn);
console.log(typeof temperature);
console.log(typeof email);
console.log(typeof objFruits);