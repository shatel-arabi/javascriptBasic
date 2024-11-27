var sweetGiven = 0;
while(sweetGiven <5){
    console.log('finish all the sweet');
    sweetGiven ++
}

// print 1 to 10

var number = 0;
while(number <=10){
    console.log(number);
    number++
    
}
// same 
var number = 1;
while(number <=10){
    console.log(number);
    number++
    
}
//it will show 2,3,.....11 as number++ before log
var number = 1;
while(number <=10){
    number++
    console.log(number);
    
}

//even number
var number = 2;
while(number <=10 ){
    console.log(number);
    number += 2
}

//odd number
var number = 1;
while(number <=10 ){
    console.log(number);
    number += 2
}

//for loop 
for(var number = 0; number <= 10; number ++){
    console.log(number);
    
}
//even
for(var number = 0; number <= 20; number +=2){
    console.log(number);
    
}

//index loop

for(var i = 0; i <= 20; i ++){
    console.log(i);
    
}

//odd for loop
for(var i = 2; i <= 10; i +=2){
    console.log(i);
    
}

//array loop
var numbers =[2,31,76,0,4,9];

for(var i = 0; i <numbers.length; i ++){
    var element = numbers[i]
    console.log(element);
    
}

//assendening number

var numbers =[22,31,76,10,44,90];
var highest = 0;

for(var i = 0; i <highest; i ++){
    if(numbers > highest)
    console.log(element);
    
}
//plus array 

var numbers =[22,31,76,10,44,90];
var total = 0;

for(var i = 0; i <numbers.length; i ++){
    var element =  numbers[i];
    total = total + element;
    
}
console.log("total " + total);

