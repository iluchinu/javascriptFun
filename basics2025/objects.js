// Object.create // singleton or constructor

const jsUser= {                                         //Object literals
    name: "manoj",
    "title name": "bhatra",
    age: 34,
    location: "Gumaguda",
    email: "manojorganic@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Wednesday"]
};            

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["title name"]);

//Insert a symobol as a key to an object
const sym= Symbol("123");

const jsSym= {
    [sym]: "organic"
}

// console.log(jsSym[sym]);

jsUser.email= "organic.taste@gmail.com";
//Object.freeze(jsUser);
jsUser.name= "organic";

// console.log(jsUser);

// console.log(jsSym);

jsUser.greeting= function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser);
// console.log(jsUser.greeting());