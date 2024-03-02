
function odd_even_check(num){
    if(num % 2 == 0){
        return  'Even' ;
    }
    else{
        return 'Odd';
    }
}
const output = odd_even_check(40);
console.log(output);
