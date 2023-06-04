const buttonDecr = document.querySelector('[data-action="decrement"]');
const buttonIncr = document.querySelector('[data-action="increment"]');
let counter = document.querySelector("#value");
let counterValue = 0;

const decrementFn = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
};

const incrementFn = () => {
    counterValue += 1;
    counter.textContent = counterValue;
};

buttonDecr.addEventListener("click", decrementFn);
buttonIncr.addEventListener("click", incrementFn);