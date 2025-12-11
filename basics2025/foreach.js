const fruits= ["avocado", "mango", "blueberry", "raspberry", "plum"];

// fruits.forEach(function (fruit){
//     console.log(fruit);
// });

// fruits.forEach((fruit)=>{
//     console.log(fruit);
// });

//pass function as param

// function print(item){
//     console.log(item);
// }

// fruits.forEach(print);

// fruits.forEach((fruit, index, arr)=>{
//     console.log(fruit, index, arr);
// });

// const map= new Map();
// map.set("username", "Organic Taste");
// map.set("name", "Organic");
// map.set("channel", "Organic");

// map.forEach((value, key)=>{
//     console.log(`${key}, ${value}`);
// });

const items= [
    {
        username: "Organic taste",
        name: "Organic"
    },

    {
        username: "Manoj Organic",
        name: "Manoj"
    },

    {
        username: "Pabitra Organic",
        name: "Pabitra"
    }
]

// items.forEach((item)=>{
//     console.log(item.username);
// });

const arrFruits=[];

// const values= fruits.forEach((fruit)=>{
//     return fruit;
// });


fruits.forEach((fruit)=>{
    if(fruit.startsWith("a"))
        arrFruits.push(fruit);
});

console.log(arrFruits);

