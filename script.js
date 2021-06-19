"use strict";

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".link-box").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector("body").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
});
