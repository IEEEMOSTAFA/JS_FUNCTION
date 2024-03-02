function odd_even_check(num){
// if(num % 2 == 0){
//    let result = (num / 2);
// }
// else{
//   let  result = (num * 2);
// }

// return result;


    if(num % 2 == 0){
        return  num / 2;

    }
    else{
        return num * 2;
    }



}




const output = odd_even_check(40);
console.log(output);