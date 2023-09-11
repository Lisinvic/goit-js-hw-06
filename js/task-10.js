const inputNumber = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const boxElement = document.querySelector("#boxes");

buttonCreate.addEventListener("click", numberOfBoxes)
buttonDestroy.addEventListener("click", () => {
  const container = document.querySelector("#boxes");
  container.innerHTML = '';
})

function numberOfBoxes() {
  createBoxes(inputNumber.value);
  
}

function createBoxes(amount) {
   let boxWidth = 30;
   const elementArray = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
  box.style.width = boxWidth + "px";
  box.style.height = boxWidth + "px";
  box.style.backgroundColor = getRandomHexColor();
  elementArray.push(box);
  boxWidth += 10;
  }
  boxElement.append(...elementArray);
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


