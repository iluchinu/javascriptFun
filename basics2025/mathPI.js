const descriptor= Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);
// console.log(Math.PI);

const organic= {
    name: "Organic",
    channel: "The Organic Taste",
    isAvailable: true,

    newVideo: function(){
        console.log("COming soon");
    }
}

console.log(organic);
console.log(Object.getOwnPropertyDescriptor(organic, "name"));


//Define your own restriction on property
Object.defineProperty(organic, "name",{
    writable: false,
    enumerable: true
});

// console.log(Object.getOwnPropertyDescriptor(organic, "name"));

for(let [key, value] of Object.entries(organic)){
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`);
    }
    
}