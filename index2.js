let result = document.getElementById("result");
let form = document.querySelector("form");
let input = document.querySelector("input");

let meals = [];

async function fetchMeals(search) {
  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((res) => res.json())
    .then((res) => (meals = res.meals));
  console.log(meals);
}

function displaymeals() {
  meals.length = 12;
  if (meals === null) {
    result.innerHTML = `
        <h1> Pas de resultat </h1>
        `;
  } else {
    result.innerHTML = meals
      .map(
        (meal) => `
            <li>
            <h2>${meal.strMeal}</h2>
            <p>${meal.strArea}</p>
            <img src=${meal.strMealThumb} alt= Photo of ${meal.strMeal}  >
            <ul></ul>
            </li>
            `
      )
      .join("");
  }
}

input.addEventListener("input", (e) => {
  fetchMeals(e.target.value).then(() => displaymeals());
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
