function isodd(number){
    if(number % 2 != 0){
        return "odd number"
    }
    else if(number % 2 == 1){
        return "odd number"
    }
    return "even"
}
console.log(isodd(9));

//factorial

let factorial =1;
for(let i = 1; i<=8; i++){
    factorial = factorial * i
}
console.log(factorial);

//function factorial

function factorial(number){
    let fact = 1;
    for(let i = 1; i<= number; i++){
        
        fact = fact * i
    }
    return fact

}

const value = factorial(6);
console.log(value);

