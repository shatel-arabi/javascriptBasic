
// negative number to positive number Math.abs means return absulate value
const myNumber = -7;
const output= Math.abs(myNumber);
console.log(output);

//floating number to round figure number (Math.ceil())
const pNumber = 88.4012;
console.log(Math.ceil(pNumber));

//floating number to round but exact number.
const rNumber = 88.4012;
console.log(Math.floor(rNumber));

//using round mathoed it will show round mut it follows decimal laws, like after .5 it will show 1.
const anotherNumber = 77.42;
const round = Math.round(anotherNumber);
console.log(round);

//random will show 0.0 to 0.9 number returns
const random = Math.random()*6 ;
console.log(Math.ceil(random));

//let variable swap
let first = 3;
let second = 5;
console.log(first, second);

let third = first;
first =second;
second = third;
//another way 
[first, second] = [second, first]
console.log(first,second);

//highest number 
const max = Math.max(first, second, third);
console.log(max);
//lowest number
const min = Math.min(first, second, third);
console.log(min);


const numbers = [12, 78, 127, 45, 34, 80, 12, 9];







