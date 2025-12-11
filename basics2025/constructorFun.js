function User(username, loginCount, isLoggedIn){
    this.username= username;
    this.loginCount= loginCount;
    this.isLoggedIn= isLoggedIn;

    this.greeting= function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this;
}

const userOne= new User("Manoj", 1, true);
const userTwo= new User("Organic", 2, true);

console.log(userOne instanceof User);
console.log(userTwo);