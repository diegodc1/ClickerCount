const counter = document.getElementById("counter");
const addButton = document.querySelectorAll("addButton");
const removeButton = document.querySelectorAll("removeButton");
const resetButton = document.querySelectorAll("resetButton");
const muteButton = document.querySelectorAll("muteButton");
// const muteImage = document.getElementById("muteImage");

let addSoundEffect = new Audio("/assets/click-sound.wav");
let removeSoundEffect = new Audio("/assets/click-sound-remove.wav");
let counterNumber = 0;

function addNumber() {
  counterNumber++;
  counter.textContent = counterNumber;
  addSoundEffect.play();
}

function removeNumber() {
  counterNumber--;
  counter.textContent = counterNumber;
  removeSoundEffect.play();
}

function resetNumber() {
  counterNumber = 0;
  counter.textContent = counterNumber;
}

function muteSound() {
  if (addSoundEffect.muted == true) {
    addSoundEffect.muted = false;
    removeSoundEffect.muted = false;
    muteImage.src = "/assets/volume-mute.svg";
  } else {
    addSoundEffect.muted = true;
    removeSoundEffect.muted = true;
    muteImage.src = "/assets/volume-muted.svg";
  }
}
