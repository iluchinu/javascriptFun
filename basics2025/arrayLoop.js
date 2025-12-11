//for of

// const arr= [1, 45, 29,100, 35];
// for (const num of arr) {
//     console.log(num);    
// }

// const greetings= "Organic taste";

// for (const greet of greetings) {
//     if(greet==" "){
//         continue;
//     }
//     console.log(`Each char is :${greet}`);
// }

//Map

const map= new Map();
map.set("IN", "India");
map.set("USA", "United States of India");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

//Destructure of key
// for (const [key] of map) {
//     console.log(key);
// }

// for (const [key, value] of map) {
//     console.log(key, value);
// }

//Iterate object //not possible

const myObj= {
    username: "organic taste",
    name: "organic"
}

//can't iterate using for of loop
// for (const [key] of myObj) {
//     console.log(key);
// }

//For-In loop
//Object can be iterable using for-in loop

// for (const key in myObj) {
//     console.log(`${key} : is ${myObj[key]}`);
// }

//Diff between for of & for in loop
const fruits= ["blueberry", "apple", "raspberry", "avocado"];
for (const fruit in fruits) {
    console.log(`for in loop: ${fruits[fruit]}`);
}

// for (const fruit of fruits) {
//     console.log(`for of loop: ${fruit}`);
// }

//Map can not iterate using for-in loop
// for (const key in map) {
//     console.log(key);
    
// }

//Alternate option to iterate an object

// for (const key of Object.keys(myObj)) {
//     console.log(key);
// }

// for (const value of Object.values(myObj)) {
//     console.log(value);
// }

// for (const [key, value] of Object.entries(myObj)) {
//     console.log(`${key} is: ${value}`);
    
// }


