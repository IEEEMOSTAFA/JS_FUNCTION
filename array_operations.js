/*
* Objective : write a function to give me the sum of all numbers in an array
*step -1 : declare a function 
* step - 2: call check whether the function is called properly
* step - 3: set a parameter(s)
* step -4 : pass the parameter (s)

*/
function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
        
    }
    return sum;

}
const numbs = [54,62,12,6]
const sum = sumOfNumbers(numbs);
console.log('Sum of numbers is ', sum)