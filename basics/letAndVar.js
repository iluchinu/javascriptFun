function varScope(){
    var a=5;
    if(true){
        var a=2;
        console.log(a);
    }
    console.log(a);
}

//varScope();

function letScope(){
    let b=5;
    if(true){
       let b=2;
        console.log(b);
    }
    console.log(b);
}

//letScope();

let x=10;
function letGlobalScope(){
    let x=100;
    console.log(x);
}

// letGlobalScope();
// console.log(x);

var y=10;
function varGlobalScope(){
    var y=100;
    console.log(y);
}

// varGlobalScope();
// console.log(y);

var abc=500;
{
    var abc=100;
    console.log(abc);
}
console.log(abc);

let xyz=500;
{
    let xyz=100;
    console.log(xyz);
}
console.log(xyz);