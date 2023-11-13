const categoriesList = document.getElementById("categories");
const categories = categoriesList.querySelectorAll(".item");

console.log("Number of categories:", categories.length);

categories.forEach((category) => {
  const categoryName = category.firstElementChild.textContent;
  console.log("Category:", categoryName);
  const elements = category.lastElementChild.children.length;
  console.log("Elements:", elements);
});
