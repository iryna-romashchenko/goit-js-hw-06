
const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onButtonClick = (event) => {
  event.preventDefault();
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
};

btn.addEventListener("click", onButtonClick);