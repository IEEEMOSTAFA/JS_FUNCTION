function zero_check(str){
    let count = 0;
   for (let i = 0;i < str.length;i++){
    if(str[i] == '0'){
        count++;
    }
    
   }
   return count;
}


const string = '0101010101';
const bin_zero = zero_check(string);
console.log(" Total number of binary zero i    :",bin_zero);