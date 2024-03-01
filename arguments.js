function doubleIt (number){
    const doubled = number * 2;
    console.log(number,doubled);
} 
console.log('I will call the function')
doubleIt(15);
doubleIt(20);
doubleIt(50);
doubleIt(150);
console.log('------------variable push-------')
const number = 400;
doubleIt(number);

// difference 
console.log('Difference check');

function difference (num1,num2){
    const diff = num1 - num2;
    console.log(num1,num2, 'difference is ',diff);
}
const father_age = 40;
const myAge = 10;
difference(father_age,myAge);