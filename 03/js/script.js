"use strict";

const body = document.body;

function updateBackground() {
  const width = window.innerWidth;
  if (width < 640) {
    body.style.background = "purple";
  } else if (width < 480) {
    body.style.background = "black";
  } else if (width < 740) {
    body.style.background = "azure";
  } else if (width < 1024) {
    body.style.background = "red";
  } else if (width < 1200) {
    body.style.background = "beige";
  } else {
    body.style.background = "pink";
  }
}
// Kør ved load
updateBackground();

// Kør igen når vinduet ændres
window.addEventListener("resize", updateBackground);
