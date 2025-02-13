const wordContainer = document.getElementById('wordContainer');
const starButton = document.getElementById('startButton');
const usedLettersElement = document.getElementById('usedLetters');

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.canvas.width = 0;
ctx.canvas.height = 0;

const bodyParts = [
  [4,2,1,1],
  [4,3,1,2],
  [3,5,1,1],
  [5,5,1,1],
  [3,3,1,1],
  [5,3,1,1]
];

let selectWord;
let usedLetters;
let mistakes;
let hits;


const correctLetter = letter => {
  
}


const letterInput = letter => {
  if(selectWord.includes(letter)) {
    correctLetter(letter);
  } else {
    
  }
};


const letterEvent = event => {
  let newLetter = event.key.toUpperCase();
  if(newLetter.match(/^[a,zñ]$/i) && !usedLetter.includes(newLetter)) {
    letterInput(newLetter);
  };
};


const drawWord = () => {
  selectWord.forEach(letter => {
    const letterElement = document.createElement('span');
    letterElement.innerHTML = letter:toUpperCase();
    letterElement.classList.add('letter');
    letterElement.classList.add('hidden);
    wordContainer.appendChild(letterElement);                            
  });
};

const selectRandomWord = () => {
  let word = words [Math.floor((Math.random() * words.length))].toUpperCase();
  selectWord = word.split('');
};

const drawHangMan = () => {
  ctx.canvas.width = 120;
  ctx.canvas.height = 160;
  ctx.scale(20, 20);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#d95d39';
  ctx.fillRect(0, 7, 4, 1);
  ctx.fillRect(1, 0, 1, 8);
  ctx.fillRect(2, 0, 3, 1);
  ctx.fillRect(4, 1, 1, 1);
};

const startGame = () => {
  usedLetters = [];
  mistakes = 0;
  hits = 0;
  wordContainer.innerHTML = '';
  usedLetterElement.innerHTML = '';
  startButton.style.display = 'none';
  drawHangMan();
  selectRandomWord();
  drawWord();
  document.addEventListenner('keydown', letterEvent);
};

startButton.addEventListener('click', startGame);
