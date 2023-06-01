

function harmlessRansomNote(noteText, magazineText) {
    var noteArr = noteText.split(' ');
    var magazineArr = magazineText.split(' ');
    var magazineObj = {};


    //  checking to see if current word is present as property on magazine object. if it isnt present we put it onto magazine object and set it equal to 0.
    magazineArr.forEach(word => {
        if (!magazineObj[word]) magazineObj[word] = 0;
        // increment word by 1
        magazineObj[word]++;
    });

    var noteIsPossible = true;
    noteArr.forEach(word => {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) noteIsPossible = false;
        }
        else noteIsPossible = false;
    });
    return noteIsPossible;
}


harmlessRansomNote('', 'this is all the magazine text in the magazine');

