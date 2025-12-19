const text = "SPALAK";
const speed = 75;
let index = 0;

const typeText = document.getElementById("type-text");
const intro = document.getElementById("intro");
const main = document.getElementById("main");

function type() {
  if (index < text.length) {
    typeText.textContent += text.charAt(index);
    index++;
    setTimeout(type, speed);
  } else {
    setTimeout(() => {
      intro.classList.add("slide-up");
      main.classList.add("slide-up");
    }, 600);
  }
}

type();
