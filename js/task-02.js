const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");


const itemsList = ingredients.map((name) => {

  const element = document.createElement("li");
  element.textContent = name;
  element.classList.add("item");

  return element;
});

console.log(itemsList);

list.append(...itemsList);

