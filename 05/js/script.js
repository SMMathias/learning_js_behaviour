"use strict";

const changeImgBtn = document.getElementById("changeImage");
const getImage = document.getElementById("imagePlaceholder");

changeImgBtn.addEventListener("click", function () {
  if (this.textContent == "Brozaaa") {
    getImage.src = "img/hank-before.png";
    this.textContent = "hehehe";
  } else {
    getImage.src = "img/hank-after.gif";
    this.textContent = "Brozaaa";
  }
});
