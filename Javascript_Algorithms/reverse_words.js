
//  Create function that Reverses words in array 
//  Every word should be reversed BUT the string as a whole should not be reversed.

function reverseWords(string) {
    // splits the string on every "space character".
    var wordsArr = string.split(' ');
    // creates an empty array to push into the reversed words back into.
    var reverseWordsArr = [];

    //  Now we need  loop through every word in our wordsArr, reverse that word - then push it into our reverseWordsArr by using for each loop.
    // We will do this in reverse order from the end of the string
    wordsArr.forEach(word => {
        var reversedWord = " ";
        // loop through every letter in word - backwards - using for loop
        for (var i = word.length - 1; i >= 0; i--) {
            // add current letter  (in position "i")to reverse word
            reversedWord += word[i];
        }
        reverseWordsArr.push(reversedWord);
    });
    // return final reversedWordsArr as a string
    return reverseWordsArr.join(' ')
}

console.log(reverseWords("this is a string"))