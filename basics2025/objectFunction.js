function handleObject(myObj){
    return `Username : ${myObj.username} is ${myObj.name}`;
}

console.log(handleObject({
    username: "organic taste",
    name: "manoj"
}));