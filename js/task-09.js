const body = document.querySelector("body");
const btn = document.querySelector(".change-color")
const colorTexOutput = document.querySelector(".color")

btn.addEventListener("click", handleChangeColor);

function handleChangeColor() {
  body.style.backgroundColor = colorTexOutput.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
