var actualLetter = ['F', 'O', 'X'];

var lettersGuessed = ['','',''];


function guessLetter() {
    var numberOfLetters = 0;
    while (numberOfLetters != actualLetter.length) {
        var guess = prompt("Guess a letter: ");
        for (var i = 0; i < actualLetter.length; i++) {
            if (guess == actualLetter[i]) {
                lettersGuessed[i] = actualLetter[i];
                numberOfLetters++;
                console.log("Congratulations, you guessed a letter!");
            }
        }
        console.log(lettersGuessed);
    }
    console.log("Congratulations, you won!");
}

guessLetter();