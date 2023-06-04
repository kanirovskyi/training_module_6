const catalog = document.querySelector('#categories');
const catalogItems = catalog.children;

console.log("Number of categories:", catalogItems.length);
console.log("\n");

const categories = [...catalogItems].forEach((item) => {
    console.log("Category: ", item.firstElementChild.textContent); 
    console.log("Elements: ", item.lastElementChild.children.length);
    console.log("\n");
 });