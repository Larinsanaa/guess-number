let randomNumber = 85; 

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetGame;

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

        if(guessCount == 10) {
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

guessSubmit.addEventListener('click', checkNumber);