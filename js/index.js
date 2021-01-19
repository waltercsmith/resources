"use strict"

/*Write a Javascript program to check two numbers & returns true if one of the numbers are 100 or if the sum of the two numbers is 100*/

function is100OrSumOf100(num1,num2) {
    if (  num1 === 100 ||  num2 === 100 ){
        return true;
    }else   if ( num1 + num2 === 100){
        return true;
    }else {
        return false;
    }
}

console.log(is100OrSumOf100("100", 50));
console.log(is100OrSumOf100(0, 100));
console.log(is100OrSumOf100(100, 0));
console.log(is100OrSumOf100(50, 50));
console.log(is100OrSumOf100(49.5, 49.5));



/*Write a JavaScript program to get the extension of a filename*/

