const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
//создаем каждый элемент
const ingredient = [...ingredients].map(item => {
  const liEl = document.createElement("li");
  liEl.classList.add('item');
  liEl.textContent = item;
  return liEl;
})
//добавляем их в список
const catalog = document.querySelector('#ingredients');
catalog.append(...ingredient);

console.log(catalog);
