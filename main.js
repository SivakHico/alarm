const currentTimeHtml = document.querySelector("#current-time");
const stopAlarm = document.querySelector("#stop-alarm");
const reminderTimeHtml = document.querySelector("#message");
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
  addedHtml.style = "text-decoration: none;";
  reminderTime();
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
  addedHtml.innerHTML = "00:00:00";
  addedHtml.style = "text-decoration: line-through;";
  hrsHtml.innerHTML = "";
  minHtml.innerHTML = "";
}

function reminderTime() {
  let zzz = currentTime - alarmTime;
  console.log(zzz);
}



displayCurrentTime();
