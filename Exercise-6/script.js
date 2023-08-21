function getUniqueNumbers(arr) {
    var uniqueNumbers = new Set();
    for (var i = 0; i < arr.length; i++) {
        uniqueNumbers.add(arr[i]);
    }

    var uniqueArray = [...uniqueNumbers];

    return uniqueArray;
}

var numbers = [1, 1, 2, 3, 4, 4, 5, 2];
var uniqueNumbers = getUniqueNumbers(numbers);
console.log(uniqueNumbers); 


function getArrayIntersection(arr1, arr2) {
    var intersection = arr1.filter(function (value) {
        return arr2.includes(value);
    });

    return intersection;
}

var array1 = [5, 10, 15, 20, 25];
var array2 = [10, 20, 30, 40, 50];
var commonElements = getArrayIntersection(array1, array2);
console.log(commonElements); 
