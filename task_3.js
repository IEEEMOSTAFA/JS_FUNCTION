
function avg_count(numbers){
    let sum = 0;
    let len = 0
    for(num of numbers){
        sum = sum + num;
        len++;
        
    }
    return sum / len;
}


const number = [10,10,10,10,10];
const avg_res = avg_count(number);
console.log(" The avg number of is    :",avg_res);