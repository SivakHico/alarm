const currentTimeHtml = document.querySelector("#current-time");
const stopAlarm = document.querySelector("#stop-alarm");
const hrsHtml = document.querySelector("#hrs");
const minHtml = document.querySelector("#min");
const addedHtml = document.querySelector("#added");
const alarmSound = new Audio("High-Sound.mp3");

let currentTime = null;
let alarmTime = null;

alarm.addEventListener("click", setAlarm);
stopAlarm.addEventListener("click", alarmStop);

function setAlarm() {
  let addedHrs = hrsHtml.value;
  let addedMin = minHtml.value;
  if (addedHrs / 10 < 1) {
    addedHrs = "0" + addedHrs;
  }
  if (addedMin / 10 < 1) {
    addedMin = "0" + addedMin;
  }
  alarmTime = `${addedHrs}:${addedMin}:00`;
  addedHtml.innerHTML = alarmTime;
}

function displayCurrentTime() {
  setInterval(() => {
    currentTime = new Date().toLocaleTimeString("de-DE");
    currentTimeHtml.innerHTML = currentTime;
    alarmChecker();
  }, 1000);
}

function alarmChecker() {
  if (alarmTime == currentTime) {
    alarmSound.play();
  }
}

function alarmStop() {
  alarmSound.pause();
  alarmReset();
}

function alarmReset() {
  addedHtml.innerHTML = "";
  hrsHtml.innerHTML = "";
  minHtml.innerHTML = "";
  console.log(555);
}

displayCurrentTime();
