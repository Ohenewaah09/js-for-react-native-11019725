function processArray(numbers){
    return numbers.map(num => {
        //even number is squared
        if (num % 2 === 0){
           return num*num;
        }
        else{
            //odd number is tripled
            num*3;
        }

    }   );
}