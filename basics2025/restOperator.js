function restOperator(...num){
    return num;
}

console.log(restOperator(200, 300, 500));

function restOperatorEx(val1, val2, ...num){
    return num;
}

console.log(restOperatorEx(200, 400, 500, 2000));

