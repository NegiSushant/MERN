// (function sum(){
//     console.log("Hello world");
// })();

function sum(a, b){
    return a+b;
}

console.log(sum(4, 5));

let sum1 = 0;

// for(let i = 0; i < 100000000; i++){
//     sum1+=i;
// }

console.log(sum1);

function sum2(num1, num2, funToCall){
    let res = num1+num2;
    return funToCall(res);
}

function displayResult(data){
    console.log("Result of the sum is: "+data);

}

function displayResultPassive(data){
    console.log("Sum's result is: "+data);
}

const ans = sum2(4, 6, displayResult);