const textInput = document.querySelector("#validation-input");
const dataLength = textInput.getAttribute("data-length");


textInput.addEventListener("blur", handleBlur);


function handleBlur(event) {
    textInput.classList.add("invalid");
    if (event.currentTarget.value.length === Number(dataLength)) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
        console.log(event.currentTarget.value.length);
    }
}