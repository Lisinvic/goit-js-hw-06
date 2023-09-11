const rangeInput = document.querySelector("input");
const content = document.querySelector("#text");

rangeInput.addEventListener('input', handleRange);

function handleRange(){
    const rangeValue = rangeInput.value;
    content.style.fontSize = rangeValue + "px";
}