// Random guessing number game

const { time } = require('console');
const readline = require('readline')

let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function getRandomnNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let tries = 3

// Player to guess numbers from 1 to 10
let randomNumber = getRandomnNumber(1, 10)

rl.setPrompt("Guess the number! (1-10): ");
rl.prompt();
rl.on('line',function (anwser) {
    tries--;
    game(tries, randomNumber, anwser)
    rl.prompt();
})

function game(tries, randomNumber, guess){
    if(tries > 0){
        if(guess == randomNumber){
            console.log("WINNER")
        }
        else if(guess < randomNumber){
            console.log("TOO LOW");
        }
        else if(guess > randomNumber){
            console.log("TOO HIGH");
        }
        else{
            console.log("NOT A NUMBER");
        }
    }
    else{
        if(guess == randomNumber){
            console.log("WINNER");
        }
        else{
            console.log("YOU LOST! THE NUMBER WAS:", randomNumber);
        }
        process.exit();
    }
}

