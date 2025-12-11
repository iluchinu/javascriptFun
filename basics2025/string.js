const name= "Demo"
const count= 100;

// console.log(name+count);

console.log(`Hello my name is ${name.toUpperCase()} and my count is ${count}`);


const gameName= new String("Cricket");

console.log(gameName.substring(1, 4));

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));
console.log(gameName.substring(0, 4));
console.log(gameName.slice(-4, 4));   

const url= "https://hitesh.com/hitesh%20choudhary";

console.log(url.includes("hitesh"));

console.log(gameName.codePointAt(2));
console.log(gameName.search("c"));