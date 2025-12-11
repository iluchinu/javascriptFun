
//Function behaves as on object
function multipleBy5(num){
    return num *5;

}

multipleBy5.power= 5;

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);


//Creating a Prototype

let fruits= ["avocado", "blueberry", "raspberry", "guava"];

let fruitsPrice= {
     avocado: "1200",
     blueberry: "2000",
     raspberry: "3000",
     guava: 100,

     price: function(){
        console.log(`Avocado price is :${this.avocado}`)
     }
}

//Factory function is default fun 
//Prototype to Object

Object.prototype.organic= function(){
    console.log(`The Organic Taste`);
}

fruitsPrice.organic();
fruits.organic();
 
//Adding prototype to array
Array.prototype.myOrganic= function(){
    console.log(`Welcome to Organic taste`);
}

fruits.myOrganic();
// fruitsPrice.myOrganic();

let username= "The organic taste";

String.prototype.truelength= function(){
    console.log(`True length is : ${this.trim().length}`);
}

username.truelength();
"Organic".truelength();


const User= {
    name: "manoj",
    link: "organic"
}

const Teacher= {
    makeVideo: true
}

const TeachingSupport= {
    isAvailable: false
}

const TASupport= {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User;

//Morden SYntax

Object.setPrototypeOf(TeachingSupport, Teacher);


