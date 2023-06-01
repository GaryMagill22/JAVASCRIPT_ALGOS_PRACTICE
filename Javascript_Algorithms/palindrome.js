function isPalindrome(string) {
    // take string and make all lowercase
    string = string.toLowerCase();
    var charactersArr = string.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var lettersArr = [];
    charactersArr.forEach(char => {
        //  this below returns the index of letter based on "validCharacters arr". if character in arraay has special chraracters it will reutrn -1
        if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });

    if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
    else return false;
}

console.log(isPalindrome("Coding Javascript"));
