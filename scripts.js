const colors = document.querySelectorAll('.color');
const button = document.querySelector('#clear-board');
const pixelBoard = document.querySelector('#pixel-board');
const generateBoardButton = document.getElementById('generate-board');

function removeSelectedColor(e) {
  colors.forEach((color) => color.classList.remove('selected'));
  e.target.classList.add('selected');
}

function paintPixel(e) {
  const selected = document.querySelector('.selected');
  const selectedColor = getComputedStyle(selected).backgroundColor;
  e.target.style.backgroundColor = selectedColor;
}

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    const newPixel = pixel;
    newPixel.style.backgroundColor = 'white';
  });
}

function fillPixelBoard(num) {
  for (let index = 0; index < num; index += 1) {
    const newRow = document.createElement('div');
    newRow.className = 'pixel-line';
    for (let index2 = 0; index2 < num; index2 += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newRow.appendChild(newPixel);
    }
    pixelBoard.appendChild(newRow);
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => pixel.addEventListener('click', paintPixel));
  }
}
fillPixelBoard(5);

function createPixelBoard() {
  let inputValue = document.getElementById('board-size').value;
  pixelBoard.innerHTML = '';
  if (inputValue === '' || inputValue < 0) alert('Board inválido!');
  if (inputValue < 5) inputValue = 5;
  if (inputValue > 50) inputValue = 50;

  fillPixelBoard(inputValue);
  document.getElementById('board-size').value = '';
}
createPixelBoard();

function generateRandomColor() {
  const colorNum = [];
  for (let i = 0; i < 3; i += 1) {
    colorNum.push(Math.round(Math.random() * 255));
  }
  return colorNum;
}

function setRamdomColor() {
  const randomColorsPallet = document.getElementsByClassName('random-color');
  for (let i = 0; i < randomColorsPallet.length; i += 1) {
    const colorNumbers = generateRandomColor();
    const color = `rgb(${colorNumbers[0]}, ${colorNumbers[1]}, ${colorNumbers[2]})`;
    randomColorsPallet[i].style.backgroundColor = color;
  }
}
setRamdomColor();

button.addEventListener('click', clearBoard);
generateBoardButton.addEventListener('click', createPixelBoard);
colors.forEach((color) => color.addEventListener('click', removeSelectedColor));
