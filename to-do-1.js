// To Do 1


// Push Front
// Given an array and an additional value, insert this value at the beginning of the array.
// Do this without using any built-in array methods.
function pushFront(arr,val){
    for (var index = arr.length; index >= 0; index--){
        var currentValue = arr[index-1];
        arr[index] = currentValue;
    }
    arr[0] = val;
    return arr;
}
var testArray = [5,16,14,8,11];
console.log(pushFront(testArray,3))


// Pop Front
// Given an array, remove and return the value at the beginning of the array.
// Do this without using any built-in array methods except pop().
function popFront(arr){
    var val = arr[0];
    for (var index = 0; index < arr.length; index++){
        var currentValue = arr[index];
        arr[index] = arr[index+1]
    }
    arr.length--;
    return val;
}
var testArray = [3,5,16,14,8,11];
console.log(popFront(testArray))


// Insert At
// Given an array, index, and additional value, insert the value into array at given index.
// Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
function insertAt(arr,givenIndex,val){
    for (var index = arr.length; index >= givenIndex; index--){
        var currentValue = arr[index-1];
        arr[index] = currentValue;
    }
    arr[givenIndex] = val;
    return arr;
}
var testArray = [5,16,14,8,11];
console.log(insertAt(testArray,3,9))

// Remove At
// Given an array and an index into array, remove and return the array value at that index.
// Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(arr,givenIndex){
    var val = arr[givenIndex];
    for (var index = givenIndex; index < arr.length; index++){
        var currentValue = arr[index];
        arr[index] = arr[index+1]
    }
    arr.length--;
    console.log(arr)
    return val;
}
var testArray = [ 5, 16, 14, 9, 8, 11 ];
console.log(removeAt(testArray,3))
// var testArray = [4,6,11,11,11,13,21];
// console.log(removeAt(testArray,2))


// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.
// For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42].
// As with all array challenges, do this without using any built-in array methods.
function swapPairs(arr){
    for (index = 0; index < arr.length-1; index+=2){
        var currentValue = arr[index];
        arr[index] = arr[index+1];
        arr[index+1] = currentValue;
    }
    return arr;
}
var testArray = [1,2,3,4];
console.log(swapPairs(testArray))
var testArray = ["Brendan",true,42];
console.log(swapPairs(testArray))

// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources.
// Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values.
// Because array elements are already in order, all duplicate values will be grouped together.
// As with all these array challenges, do this without using any built-in array methods.
function removeDuplicates(arr){
    for (index = 0; index < arr.length; index++){
        if (arr[index] == arr[index+1]){
            removeAt(arr,index);
            index--;
        }
    }
    return arr;
}
var testArray = [4,6,11,11,11,13,21];
console.log(removeDuplicates(testArray));

// Second: Solve this without using any nested loops.