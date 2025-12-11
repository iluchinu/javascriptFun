const myNums= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums= myNums.filter((num)=> num > 4);

const nums= myNums.filter((num)=> {
    return num > 4;
});

// console.log(newNums);
// console.log(nums);

 const mapNum =myNums.map((num)=> num+10);
//  console.log(mapNum);

//chaining
const chainNum= myNums
                .map((num)=> num*10)
                .map((num)=> num+1)
                .filter((num)=> num> 40);

// console.log(chainNum);    

//Reduce

const numbers= [1, 2, 3];
const total= numbers.reduce((acc, cur)=>{
    return acc+cur
}, 0);

// console.log(numbers.reduce((acc, cur)=> acc+cur, 0));
// console.log(total);

const fruits= [
    {
        fruit: "avocado",
        price: 1200
    },
    {
        fruit: "blueberry",
        price: 1500
    },
    {
        fruit: "raspberry",
        price: 2000
    },
    {
        fruit: "mango",
        price: 1000
    }
];

const amount= fruits.reduce((acc, fruit)=> acc+fruit.price, 0);
console.log(amount);