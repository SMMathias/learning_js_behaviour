"use strict";

const getZoomBtn = document.getElementById("zoomBtn");
const getWordElem = document.getElementById("word");

getZoomBtn.addEventListener("click", function () {
  if (this.textContent == "Zoom ind") {
    getWordElem.style.fontSize = "6rem";
    this.textContent = "Zoom ud";
    getZoomBtn.style.color = "black";
    getWordElem.style.color = "red";
  } else {
    getWordElem.style.fontSize = "3.0rem";
    getZoomBtn.style.color = "white";
    getZoomBtn.style.fontFamily = "sans-serif";
    getWordElem.style.color = "darkcyan";
    this.textContent = "Zoom ind";
  }
});
