function countOccurrences(arr) {
    var countObj = {}; 

    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];

        if (!countObj[element]) {
            countObj[element] = 1;
        } else {
            countObj[element]++;
        }
    }

    return countObj;
}

var myArray = [1, 2, 2, 3, 3, 3, 7, 6, 7, 5];
var result = countOccurrences(myArray);
console.log(result); 


function reverseString(inputString) {
    var reversedString = "";

    for (var i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }

    return reversedString;
}

var input = "Hello, This is Janvi Thakkar here!";
var result = reverseString(input);
console.log(result); 
