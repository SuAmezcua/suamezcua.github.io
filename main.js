const keys = document.querySelectorAll('.key');
const whiteKeysElements = document.querySelectorAll('.key.white');
const blackKeysElements = document.querySelectorAll('.key.black');

console.log(keys.length);

function playNote(element) {
  const noteAudio = document.getElementById(element.dataset.note);
  noteAudio.play();
}

let myName = "Ssu";
const nameSpan = document.getElementById('name');
nameSpan.textContent = myName

let myAge = 18;
const ageSpan = document.getElementById('age');
ageSpan.textContent = myAge

let likesMusic = true;
let likesMusicText;

if (likesMusic === true) {
  likesMusicText = 'me fascina el punchis punchis';
} else {
  likesMusicText = 'no me late el punchis punchis';
}

const likesMusicSpan = document.querySelector('#likesMusic');
likesMusicSpan.textContent = likesMusicText;

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

document.addEventListener('keydown', (e) => {
  console.log(e) // el tipo de dato Object nos permite representar datos mas complejos
  // if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key); // 0 - 6 si lo encuentra, si no -1
  const blackKeyIndex = BLACK_KEYS.indexOf(key); // 0 - 4 si lo encuentra, si no -1

  if (whiteKeyIndex > -1) { // si existe
    playNote(whiteKeysElements[whiteKeyIndex]);
  }

  if (blackKeyIndex > -1) {
    playNote(blackKeysElements[blackKeyIndex]);
  }
});