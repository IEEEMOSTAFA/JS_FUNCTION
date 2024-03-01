/*
* for a given string tell me whether it has even number of characters or not 
*/

function evenSizeString(str){
    const size = str.length;
    if(size % 2 == 0){
        console.log('even size')
    }
    else{
        console.log('odd size')
    }
    console.log(str,size);
}

// evenSizeString('Dhaka');
// evenSizeString('faka');

function doubleorTriple(number,doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}
// console.log(doubleorTriple(5,true));
// console.log(doubleorTriple(5,false));

function numbeOfElements(numbers){
    const len = numbers.length;
    return len;
}
// numbeOfElements([12,45,78,45,121254,4,5])


function getAge(person){
    const age = person.age;
    return age;
    
}