//Task 1:
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


//Task 2: Adding a function formatArrayStrings to arrayManipulation.js file
function formatArrayStrings(strings, processedNumbers){
    return strings.map((str, index) =>{
        if(processedNumbers[index] % 2 === 0){
            return str.toUpperCase(); // method that convets strings to upper case if processedNumbers is even
        }
        else{
            return str.toLowerCase(); //method converts strings to lower case if processedNumbers is odd
        }
    });
}

//export functions to be used in other files
module.exports = { processArray, formatArrayStrings };