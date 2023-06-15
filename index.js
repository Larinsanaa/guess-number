let randomNumber = Math.floor(Math.random() * 100) + 1; 

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

const maxTtryText = document.querySelector('.maxTryText');
const tent5 = document.querySelector('.tent5');
const tent10 = document.querySelector('.tent10');
const tent15 = document.querySelector('.tent15');


let guessCount = 1;
let resetGame;
let maxTry = 10;
maxTtryText.textContent = maxTry;

function checkNumber() {
   
    guesses.textContent += guessField.value + ' - ';

    if(guessField.value == randomNumber) {
        lastResult.textContent = 'Ganhou o jogo'
        console.log('Acertou o número.');
        // Jogo encerrado, ganhou.
    }else {
        lastResult.textContent = 'Errou o palpite'
        if(guessField.value > randomNumber) {
            console.log('Número informado é alto demais.');
            lowOrHigh.textContent = 'Número informado é alto demais.';
        }
        if(guessField.value < randomNumber) {
            console.log('Número informado é baixo demais');
            lowOrHigh.textContent = 'Número é baixo demais';
        }

        if(guessCount == maxTry) {
            lastResult.textContent = 'Perdeu o jogo';
            guessSubmit.disabled = true;
            guessField.disabled = true;
            (console.log('Perdeu o jogo'))
            // Jogo encerrado, perdeu.
        }
        
    }
    
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

function mudarSetup(value) {
    maxTry = value;
    maxTtryText.textContent = value;
}

function setup5() {
    mudarSetup(5)
}

function setup10() {
    mudarSetup(10)
}

function setup15() {
    mudarSetup(15)
}


guessSubmit.addEventListener('click', checkNumber);
tent5.addEventListener('click', setup5);
tent10.addEventListener('click', setup10);
tent15.addEventListener('click', setup15);
