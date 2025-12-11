function createUser(name, score){
    this.name= name;
    this.score= score;
}

createUser.prototype.increment= function(){
    this.score++;
}

createUser.prototype.printMe= function(){
    console.log(`price is ${this.score}`);
}
 

const userOne= new createUser("Manoj", 100);
const userTwo= new createUser("Organic", 200);

userOne.printMe();