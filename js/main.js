// App Code
let deg = 6;
let hr = document.querySelector(".hr");
let mn = document.querySelector(".mn");
let sc = document.querySelector(".sc");

// Digital Clock
let clickSound = document.querySelector("#clickSound");
let analog_time = document.querySelector(".clock");
let time = document.querySelector(".digital-clock");

analog_time.onclick = () => {
  time.style.display = "block";
  analog_time.style.display = "none";
  clickSound.play();
};
time.onclick = () => {
  time.style.display = "none";
  analog_time.style.display = "inherit";
  clickSound.play();
};

setInterval(() => {
  let dey = new Date();

  let hh = dey.getHours() * 30;
  let mm = dey.getMinutes() * deg;
  let ss = dey.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  // Digital Clock
  let hours = dey.getHours();
  let minutes = dey.getMinutes();
  let seconds = dey.getSeconds();

  // hour.innerHTML = `${hhh - 12}` < 10 ? `0${hhh - 12}` : `${hhh - 12}`;
  // minutes.innerHTML = `${mmm}` < 10 ? `0${mmm}` : `${mmm}`;
  // seconds.innerHTML = `${sss}` < 10 ? `0${sss}` : `${sss}`;

  // Day Night AM & PM
  let dayNight = "AM";
  if (hours > 12) {
    dayNight = "PM";
    hours = hours - 12;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  time.innerHTML = `${hours} : ${minutes} : ${seconds} : ${dayNight}`;
  day_night.innerHTML = dayNight;
});

// Toggle Analog Clock And Digital Clock

// Toggle Code

let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");
let clock = document.querySelector(".clock");
toggle.onclick = () => {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
  clock.classList.toggle("active");
  hr.classList.toggle("active");
  mn.classList.toggle("active");
  sc.classList.toggle("active");
  time.classList.toggle("active");
  clickSound.play();
};
