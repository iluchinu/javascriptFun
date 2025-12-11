class User{
    constructor(email, password){
        this.email= email;
        this.password= password;
    }

    set password(value){
        this._password= value;
    }

    // get password(){
    //     return this._password.toUpperCase();
    // }

    get password(){
        return `${this._password}Taste`;
    }
}

const organic= new User("organictaste@gmail.com", "organic123");
console.log(organic.password);
