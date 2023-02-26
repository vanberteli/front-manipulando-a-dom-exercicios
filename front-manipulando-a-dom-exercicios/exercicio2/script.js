const redBox = document.querySelector('.red');
const blueBox = document.querySelector('.blue');
const purpleBox = document.querySelector('.purple');
const orangeBox = document.querySelector('.orange');

const buttonRandon = document.querySelector('button');
const h2Result = document.querySelector('h2');

let currentOptions = '';

function unmarkSelectedBoxes() {
    redBox.classList.remove('selected');
    blueBox.classList.remove('selected');
    purpleBox.classList.remove('selected');
    orangeBox.classList.remove('selected');
}

function resetGame() {
    setTimeout(() => {
        h2Result.textContent = '';
        unmarkSelectedBoxes();
        currentOptions = '';
    }, 1000);
}

redBox.onclick = () => {
    currentOptions = 'red';

    unmarkSelectedBoxes();
    redBox.classList.add('selected');
}

blueBox.onclick = () => {
    currentOptions = 'blue';

    unmarkSelectedBoxes();
    blueBox.classList.add('selected');
}

purpleBox.onclick = () => {
    currentOptions = 'purple';

    unmarkSelectedBoxes();
    purpleBox.classList.add('selected');
}

orangeBox.onclick = () => {
    currentOptions = 'orange';

    unmarkSelectedBoxes();
    orangeBox.classList.add('selected');
}

buttonRandon.onclick = () => {
    const colorOptions = ['red', 'blue', 'purple', 'orange'];

    if (currentOptions === '') {
        h2Result.textContent = 'Selecione uma cor para sortear!';
        return;
    }

    const aleatoryPosition = Math.floor(Math.random() * 4);

    const randomColor = colorOptions[aleatoryPosition];

    if (currentOptions !== randomColor) {
        h2Result.textContent = 'Tente Novamente!';
        resetGame();
        return;
    }

    h2Result.textContent = 'Parabéns, você acertou!';
    resetGame();
}