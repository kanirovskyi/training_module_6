const nameOutput = document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");

nameInput.addEventListener("input", InputChange);

function InputChange(event) {
    if (event.currentTarget.value !== "") {
        return nameOutput.textContent = event.currentTarget.value;
    }
    return nameOutput.textContent = "Anonymous!";
}