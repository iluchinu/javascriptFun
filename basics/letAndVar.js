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

letScope();