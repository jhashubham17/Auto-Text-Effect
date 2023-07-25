heading = document.querySelector(".text");

let text = "Hi! I'm Shubham";
let texts = ["Amit", "Web Developer"];

let i = 1;
isForwards = true;
textCount = 0;

setInterval(function () {
  heading.textContent = texts[textCount].substring(0, i);
  if (isForwards) {
    i++;
  } else {
    i--;
  }
  if (i > text.length + 10) {
    isForwards = false;
  }
  if (i < 0) {
    isForwards = true;
    textCount++;
  }
  if (textCount > texts.length - 1) {
    textCount = 0;
  }
}, 100);
