const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const allIngredients = document.querySelector("#ingredients");

const ingredientsArr = ingredients.map((el) => {
  let ingredientItem = document.createElement("li");
  ingredientItem.classList.add("item");

  ingredientItem.textContent = el;

  return ingredientItem;
});

allIngredients.append(...ingredientsArr);
