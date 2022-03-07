const counter = document.getElementById("counter");
const addButton = document.querySelectorAll("addButton");
const removeButton = document.querySelectorAll("removeButton");
const resetButton = document.querySelectorAll("resetButton");
const noSoundButton = document.querySelectorAll("noSoundButton");

let sound = new Audio("/assets/click-sound.wav");
let counterNumber = 0;

function addNumber() {
  counterNumber++;
  counter.textContent = counterNumber;
  sound.play();
}

function removeNumber() {
  counterNumber--;
  counter.textContent = counterNumber;
  sound.play();
}

function resetNumber() {
  counterNumber = 0;
  counter.textContent = counterNumber;
  sound.play();
}

function noSound() {
  sound = 0;
}
