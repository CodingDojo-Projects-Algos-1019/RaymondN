// Min to Front

// Given an array of comparable values, move the lowest element to array’s front,
// shifting backward any elements previously ahead of it. Do not otherwise change the array’s order.
// Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function minToFront(arr){
    var lowestElement = arr[0];
    var lowestIndex = 0;
    for (index = 0; index < arr.length; index++){
        if (arr[index] < lowestElement){
            lowestElement = arr[index];
            lowestIndex = index;
        }
    }
    return pushFront(arr,removeAt(arr,lowestIndex))
}
var testArray = [4,2,1,3,5];
console.log(minToFront(testArray));

function removeAt(arr,givenIndex){
    var val = arr[givenIndex];
    for (var index = givenIndex; index < arr.length; index++){
        var currentValue = arr[index];
        arr[index] = arr[index+1]
    }
    arr.length--;
    return val;
}

function pushFront(arr,val){
    for (var index = arr.length; index >= 0; index--){
        var currentValue = arr[index-1];
        arr[index] = currentValue;
    }
    arr[0] = val;
    return arr;
}