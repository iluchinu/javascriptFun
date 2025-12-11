const tinder= new Object();
const tinderLiteral= {};

// console.log(tinder);
// console.log(tinderLiteral);


tinderLiteral.id= "123";
tinderLiteral.name= "xyz";
tinderLiteral.isLoggedIn= false;

// console.log(tinderLiteral);

const organicUser= {
    email: "organic.taste@gmail.com",
    fullname: {
        fname: "manoj",
        lname: "bhatra"
    }
}

// console.log(organicUser);

const obj1= {1: "a", 2: "b"}
const obj2= {3: "c", 4:"d"}

// const obj3= {obj1, obj2};
const obj3= Object.assign(obj1, obj2);

//Good practice to have an empty array for grunted merge
const obj4= Object.assign({}, obj1, obj2);

// console.log(obj3);
// console.log(obj4);

const obj5= {...obj1, ...obj2};
// console.log(obj5);

//important
//get all keys

console.log(Object.keys(tinderLiteral));
console.log(Object.values(tinderLiteral));
console.log(Object.entries(tinderLiteral));

console.log(tinderLiteral.hasOwnProperty("isLoggedIn"));