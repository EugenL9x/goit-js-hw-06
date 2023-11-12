const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");

const ingredientsCollection = ingredients.map((ingredient) => {
  const ingredientLi = document.createElement("li");

  ingredientLi.classList.add("item");
  ingredientLi.textContent = ingredient;

  return ingredientLi;
});

ingredientsList.append(...ingredientsCollection);
