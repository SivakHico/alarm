const time = document.querySelector("#time");
const hoursHtml = document.querySelector("#hours");
const minHtml = document.querySelector("#min");
const secHtml = document.querySelector("#sec");

const hours = [1, 2, 3, 4, 5];
const minutes = [1, 2, 3, 4, 5];
const second = [1, 2, 3, 4, 5];

const displayHours = (item) => {
  return `<option value='${item}'>
  ${item}
  </option>`;
};

const displayMin = (item) => {
  return `<option>
    ${item}
    </option>`;
};

const displaySec = (item) => {
  return `<option>
    ${item}
    </option>`;
};

hoursHtml.innerHTML = hours.map(displayHours).join("");
minHtml.innerHTML = minutes.map(displayMin).join("");
secHtml.innerHTML = second.map(displaySec).join("");

console.log(hoursHtml);

function timer() {
  time.innerHTML = new Date().toLocaleTimeString("de-DE");
}

setInterval(timer);
