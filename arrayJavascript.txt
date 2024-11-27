var student = ['arabi', 'shatel', 'ara'];
console.log(student); //print array
console.log(student.length); //print how many

var mix = ['arabi', 29, true, 'student'];
console.log(mix);
const mixArrayIndex= mix.indexOf('arabi');
console.log(mixArrayIndex); //print position , 0
// find element by index number 
var findFixIndex = mix[3];
console.log(findFixIndex);
//replace array item
mix[3] = 'number';
console.log(mix);

//add item
mix.push('0000000');
console.log(mix);
// delete last element
mix.pop('arabi');
console.log(mix);
//delete first elemnet
mix.shift();
console.log(mix);
//splice(start, deleteCount, item1)
var mix = ['arabi', 29, true, 'student'];
mix.splice(2, 0, "xxx");
console.log(mix);

//compare
console.log(5>6);
console.log(5<6);
console.log(5 == 6);//false
console.log(6 == 6);//true
console.log(5 != 6);


var first = 99;
var second = 100;
console.log( first > second);

//if else
var jodHolder = false;
var saveMoney = 15000;
var hasFlat = true;

if( jobHolder = true && saveMoney > 20000 && hasFlat==true){
    console.log("go for it");
    
}
else if((jobHolder == true && saveMoney > 20000)||hasFlat==true){
    console.log("go for it with low condition");
}

else{
    console.log('not approved');
}

//nested if else
 if (saveMoney > 20000){
    if(jobHolder == true|| hasFlat == false){
        console.log("go for it");
        
    }
    else{console.log("sorry");
    }
 }
 else if(saveMoney < 20000){
    if(jobHolder == false|| hasFlat == false){
        console.log("go with low condition");
        
    }
    else{console.log("sorry");
    }
 }
 else{
    console.log("very complicated");
    
 }



















