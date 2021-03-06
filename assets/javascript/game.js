var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function getRandomValue(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function resetGameWithMessage(message) {
    guessesLeft = 9;
    pcGuess = getRandomValue(letters);
    alert(message);
}
function setInnerText(id, text) {
    document.getElementById(id).innerText = text;
}
//Computer guesses
var pcGuess = getRandomValue(letters);
//Used to see pcGuess and make sure wins & losses work
console.log(pcGuess);

//Listen for User keypresses
document.onkeypress = function (event) {
    var userGuess = event.key;
    console.log(userGuess);
    if (letters.indexOf(userGuess) > -1) {
        //we know we have a valid letter to work with
        if (userGuess === pcGuess) {
            wins++;
            resetGameWithMessage('You won');
        }
        else {
            //The user guessed the wrong letter
            guessesLeft--;
        }
        //We need to do a couple more things every time
        if (guessesLeft === 0) {
            //User lost
            losses++;
            resetGameWithMessage('You lost');
        }
        //Next big thing is we need to update all these values in the DOM
        setInnerText('wins', wins);
        setInnerText('losses', losses);
        setInnerText('guessesLeft', guessesLeft);
    
        //Get letters to show on HTML
        var guessedLetters = document.getElementById("guessesSoFar");

        document.onkeypress = function(event){
            guessedLetters.innerHTML = userGuess;
        }
    }
    else {
        alert('You must press a valid letter.');
    }
}