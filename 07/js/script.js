"use strict";

// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {
//     this.innerHTML = "<strong>BILKA!</strong>"
// });

// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {

//     if (this.textContent == "Hvem ka"){
//         this.innerHTML = "<strong>BILKA!</strong>";
//     }
//     else {
//         this.innerHTML = "Hvem ka";
//      }
// });

const getWordElem = document.getElementById("word");

getWordElem.addEventListener("click", function () {
  if (this.textContent == "Det ta'r kun 5 minutter") {
    this.innerHTML = "<strong>og så er du i Netto.</strong>";
  } else {
    this.innerHTML = "Det ta'r kun 5 minutter";
  }
});

const getNettoElem = document.getElementById("netto");

getNettoElem.addEventListener("click", function () {
  if (this.textContent == "Livet er dyrt") {
    this.innerHTML = "</strong>Gå i Netto.</strong>";
  } else {
    this.innerHTML = "Livet er dyrt";
  }
});
