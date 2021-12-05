// App Code
let deg = 6;
let hr = document.querySelector(".hr");
let mn = document.querySelector(".mn");
let sc = document.querySelector(".sc");

setInterval(() => {
  let dey = new Date();

  let hh = dey.getHours() * 30;
  let mm = dey.getMinutes() * deg;
  let ss = dey.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});

// Toggle Code

let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");
let clock = document.querySelector(".clock");
let clickSound = document.querySelector("#clickSound");
toggle.onclick = () => {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
  clock.classList.toggle("active");
  hr.classList.toggle("active");
  mn.classList.toggle("active");
  sc.classList.toggle("active");
  clickSound.play();
  clickSound.repeat(Infinity);
};
