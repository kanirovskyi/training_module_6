function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector("body")
const colorValue = document.querySelector(".color");
const buttonClick = document.querySelector(".change-color");

console.log(colorValue.textContent);

buttonClick.addEventListener("click", () => {
  const colorHex = getRandomHexColor();
  bodyColor.style.backgroundColor = colorHex,
    colorValue.textContent = colorHex,
  console.log(colorValue.textContent);
})
// buttonClick.addEventListener("click", (event) => {  })

console.log(colorValue.textContent);
