function factorial(num){
    let sum = 1;
    for(let i = 1; i <= num; i++){
        sum *= i;
    }
    let itog = sum.toString().split("").join("");
    return parseInt(itog);
}
console.log(factorial(4));