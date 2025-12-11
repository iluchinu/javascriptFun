const promiseOne= new Promise(function(resolve, reject){
    //Do an async task
    //DB call, Network call 
    setTimeout(()=>{
        // console.log("Async task is complete");
        resolve();
    }, 1000)
});

promiseOne.then(()=>{
    // console.log("Promise consumed");
}); 

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // console.log("Async task 2");
        resolve();
    }, 1000)
}).then(()=>{
    // console.log("Async 2 resolved");
});

const promiseThree= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username: "Organic Taste", name: "Manoj"});
    }, 1000)
});

promiseThree.then((data)=>{
    // console.log(data);
});

const promiseFour= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error= false
        if(!error){
            resolve({username: "Organic Taste", name: "Manoj"})
        }else{
            reject("Error: Something went wrong");
        }
    }, 1000)
});


//call back hell
promiseFour.then((data)=>{
    // console.log(data);
    return data.username;
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log("Resolved or Rejected"));