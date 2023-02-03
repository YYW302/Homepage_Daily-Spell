const time = document.querySelector(".time");
const greeting = document.querySelector(".greeting");
const showDate = document.querySelector(".full-date");
const greetingIcon = document.querySelector(".greeting-icon");
const spellName = document.querySelector("#spell-name");
const spellExplain = document.querySelector("#spell-explain");
const allDays = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
const allMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
//* ------------------------ Set date -------------------------//
const date = new Date();
// Wed Feb 01 2023 15:28:49 GMT+0000

const day = allDays[`${date.getDay()}` - 1];
const mon = allMonths[`${date.getMonth()}` - 1];
const min = date.getMinutes();
const hour = date.getHours();

getDate();
getGreeting();

function getDate() {
  time.textContent = `${hour < 10 ? `0` : ``}${hour}:${
    min < 10 ? `0` : ``
  }${min}`;
  showDate.textContent = `${day}. ${date.getDate()} ${mon}, ${date.getFullYear()}`;
}

function getGreeting() {
  // hours (0 ~ 23)
  if (hour >= 4 && hour < 12) {
    greetingIcon.innerHTML = `<image class="greeting-icon" src="assests/sun.png" alt="time icon"></image>`;
    // greetingIcon.src = "assests/sun.png";
    greeting.textContent = `Good morning.`;
  } else if (hour >= 12 && hour < 19) {
    // greetingIcon.src = "assests/tea.png";
    greetingIcon.innerHTML = `<image class="greeting-icon" src="assests/tea.png" alt="time icon"></image>`;
    greeting.textContent = `Good afternoon.`;
  } else {
    // greetingIcon.src = "assests/moon.png";
    greetingIcon.innerHTML = `<image class="greeting-icon" src="assests/moon.png" alt="time icon"></image>`;
    greeting.textContent = `Good evening.`;
  }
}

setInterval(() => {
  getDate();
  getGreeting();
}, 1000);

//* ------------------------ Fetch spell -------------------------//

// spell id 1 ~ 72
let num = Math.random();
let randomNum = Math.ceil(num * 72);
const url = `https://harry-potter-api-en.onrender.com/spells/${randomNum}`;
// console.log(url);

async function getApi() {
  const res = await fetch(url);
  const json = await res.json();
  console.log(res);

  spellName.textContent = `"${json.spell}"`;
  spellExplain.textContent = json.use;
}
getApi();
