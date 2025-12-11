// function sayMyName(){
//     console.log("Hi");
//     console.log("Hello");
// }

// sayMyName();

function addTwoNumber(num1, num2){
    return num1+num2;
}

const result= addTwoNumber(3, 4);
console.log(result);

const value= function(){
    console.log("I am anonymous");
}

value.apply();

function loginUserMessage(username){
    if(!username){
        console.log("Plz enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage());

//Default user
function loggedIn(username= "Manoj"){
    return `${username} just logged in`;
}