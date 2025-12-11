//Basic loop

// for(let i=1; i<=10; i++){
//     console.log(`Outer loop value: ${i}`);
//     for(let j=1; j<=10; j++){
//         // console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log(i+"*"+j+"="+i*j);
//     }
// }


//read element from array
// let myArr= ["Manoj", "Pabitra", "Chinu", "Organic"];

// for(let i=0; i<myArr.length; i++){
//     console.log(`Array Elements are :${myArr[i]??""}`);
// }

//break and continue

// for(let i=1; i<=20; i++){
//     if(i==5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`value of i is:${i}`);
// }

for(let i=1; i<=20; i++){
    if(i==5){
        console.log("Detected 5");
        continue;
    }
    console.log(`value of i is:${i}`);
}

