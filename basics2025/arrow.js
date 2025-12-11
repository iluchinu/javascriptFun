const user= {
    username: "organic",
    channel: "organic taste",

    welcomeMessage: function(){
        console.log(`${this.username} welcome onboard`);
   }
    
}

user.welcomeMessage();

// user.username= "manoj";
// user.welcomeMessage();
console.log(this);

function temp(){
    // console.log(this);
}

temp();

function tempThis(){
    const user= "organic";
    // console.log(this.user);
}

tempThis();

const arrowFun= ()=>{
    console.log("Hi I am arrow function");
}

// const add= (num1, num2)=>{
//     return num1+num2;
// }

// console.log(add(4,9));

//implicit return
const add= (num1, num2)=> num1+num2;

console.log(add(6,3));

const returnObject= (num1, num2)=> ({username: "organic"});

console.log(returnObject(3,8));
