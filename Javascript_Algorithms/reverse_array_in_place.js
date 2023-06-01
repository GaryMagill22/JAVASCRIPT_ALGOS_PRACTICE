
// Function that reverses array in place 
function reverseArrayInPlace(arr) {
    // have to have divided by 2 so that it doesnt go through entire array - need to stop halfway.
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}




console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]));