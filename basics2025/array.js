 const myArr= [1, 45, 23, 98, 50];
 const arrDiff= new Array(34, 51, 11, 30, 79); 

//  console.log(myArr[0]);
//  myArr.push(6);
//  myArr.pop();

//  myArr.unshift(9);
//  myArr.shift();


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(23));
// console.log(myArr.join());
// const newArr= myArr.join();

// console.log(myArr);
// console.log(newArr); 
// console.log(typeof myArr);
// console.log(typeof newArr);
 
//slice & splice
console.log("A", myArr);

console.log(myArr.slice(1, 3));
console.log("B", myArr);

console.log(myArr.splice(1, 3));
console.log("C", myArr);

const exoticVeggies= ["broccoli", "bell pepper", "tofu", "carrot"];
const exoticFruits= ["blueberry", "raspberry", "pears", "avocado"];

// exoticVeggies.push(exoticFruits);

// console.log(exoticVeggies);
// console.log(exoticVeggies[4]);

// const exotic= exoticFruits.concat(exoticVeggies);
// console.log(exotic);

//Spread Operator
 const cart= [...exoticVeggies, ...exoticFruits];
//  console.log(cart);

const flatArr= [[1, 4, 2],55, 34, [4,1,8,2,9],[1,4,[4,9,33,80]]];
console.log(flatArr.flat(Infinity));

// console.log(Array.isArray("organic"));
console.log(Array.from("organic"));
// console.log(Array.from({name: "organic"})); //important

let score1= 200;
let score2= 300;
let score3= 400;

// console.log(Array.of(score1, score2, score3, cart, flatArr));
