function SetUsername(username){
    // console.log(username);
    this.username= username;
}

function createUser(username, email, password){
    // SetUsername(username);
    SetUsername.call(this, username);
    this.email= email;
    this.password= password;
}

const organic= new createUser("organic", "organictaste@gmail.com", "123");
console.log(organic);