const counter = document.getElementById("counter");
const addButton = document.querySelectorAll("addButton");
const removeButton = document.querySelectorAll("removeButton");
const resetButton = document.querySelectorAll("resetButton");
const muteButton = document.querySelectorAll("muteButton");

const addSoundEffect = new Audio("/assets/click-sound.wav");
const removeSoundEffect = new Audio("/assets/click-sound-remove.wav");
const resetSound = new Audio("/assets/reset-sound.wav");

let counterNumber = 0;

function addNumber() {
  counterNumber++;
  counter.textContent = counterNumber;
  addSoundEffect.play();
  changeColorNegativeNumber();
}

function removeNumber() {
  counterNumber--;
  counter.textContent = counterNumber;
  removeSoundEffect.play();
  changeColorNegativeNumber();
}

function resetNumber() {
  counterNumber = 0;
  counter.textContent = counterNumber;
  resetSound.play();
  changeColorNegativeNumber();
}

function changeColorNegativeNumber() {
  if (counterNumber < 0) {
    counter.classList.add("red");
  } else {
    counter.classList.remove("red");
  }
}

function muteSound() {
  if (addSoundEffect.muted == true) {
    addSoundEffect.muted = false;
    removeSoundEffect.muted = false;
    resetSound.muted = false;
    muteImage.src = "/assets/volume-mute.svg";
  } else {
    addSoundEffect.muted = true;
    removeSoundEffect.muted = true;
    resetSound.muted = true;
    muteImage.src = "/assets/volume-muted.svg";
  }
}

document.addEventListener("keyup", function (event) {
  if (event.key === "+" || event.key === "ArrowUp") {
    addNumber();
  } else if (event.key === "-" || event.key === "ArrowDown") {
    removeNumber();
  } else if (event.key === "r" || event.key === "R") {
    resetNumber();
  }
});
