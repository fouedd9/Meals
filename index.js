let meals = [];

let form = document.querySelector("form");
let input = document.getElementById("search");
let result = document.getElementById("result");

console.log(form);
console.log(input);

// Solo Learn
// const speed = 40;
// const time = distance / speed;
// const timeInMinutes = time * 60;
// console.log(timeInMinutes);

async function fetchData(search) {
  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((res) => res.json())
    .then((res) => (meals = res.meals));
  console.log(meals[0]);
}

function diplaysMeals() {
  if (meals === null) {
    result.innerHTML = `
    <h1 class = "noResult">Non trouvé ce que vous avez demandé !!! </h1>
    `;
  } else {
    meals.length = 12;
    result.innerHTML = meals
      .map((meal) => {

        let ingredients = []

        for (i = 1; i < 21; i++) {
          if (meal[`strIngredient${i}`]) {
            let ingredient = meal[`strIngredient${i}`];
            let measure = meal[`strMeasure${i}`];
            ingredients.push(`<li>${ingredient} - ${measure}</li>`);
          }
          
        }



        return `
      <li class= "card">
      <h2> ${meal.strMeal} </h2>
      <p>${meal.strArea}</p>
      <img src=${meal.strMealThumb} alt = Photo of ${meal.strArea}>
      
      <ul>${ingredients.join("")}</ul>
      
      </li>
      `;
      })
      .join("");

    window.onscroll = function () {
      console.log(window.pageYOffset);

      if (window.pageYOffset < 89) {
        form.style.top = "0px";
        form.style.transition = "top 0.3s";
      } else {
        form.style.top = "-250px";
      }
    };
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

input.addEventListener("input", (e) => {
  fetchData(e.target.value).then(() => diplaysMeals());
});

// input = ?, speed = 40, input = (150 / 40 ) * 60

// var inputtt = prompt("Ajouter un chffre ");
// var input2 = prompt("ajouter la puissance")
// var calc = Math.pow(inputtt, input2);
// alert(`the result est:  ${calc}`);

// var btn = document.getElementById("btn")
// btn.addEventListener("click", myFunction, false);

// function myFunction() {
//  var input = prompt("vitesse")
//  var input2 = prompt ("distance")
//  var result = input * input2
//  document.body.innerHTML = `la resultat est : ${result}`
// }

// var arr = ['one','two']
// var arr2 = ['three', 'four']
// var arr3 = ['five','sex']
// var arrTotal = [...arr, ...arr2,...arr3, "seven", "eight"]
// console.log(arrTotal);

// let btn = document.getElementById("btn")
// btn.addEventListener("click", ()=> {
//   document.body.innerHTML = `<h1>la resultat est : ${arrTotal[1]}</h1>`
// })

// mettre deux object dans un seul tableau et afficher son contenu
// const obj1 = { name: "rafik", age: 31 };
// const obj2 = { name: "hela", age: 32 };
// const obj3 = { name: "haifa", age: 34 };
// const obj4 = { name: "omar", age: 45 };
// const objct5 = [obj1, obj2, obj3];

// let total = (...obj) => ({ ...obj });
// let totalObj = total(obj1, obj2, obj3, obj4);
// console.log(totalObj);

// for (let index = 0; index < objct5.length; index++) {
//   const element = objct5[index];
//   const element2 = ` Name: ${element.name}, Age : ${element.age} ans`;
//   // console.log(element)
//   console.log(element2);
//   document.body.innerHTML = objct5
//     .map(
//       (reso) =>
//         `<h1 class= "test"> Name : ${reso.name}</h1> <p class= "po"> Age: ${reso.age} ans</p>`
//     )
//     .join("");
// }
// // console.log(objct5[0].name);

// let nam = new Set([1,2,1,2,1,2,3])
// console.log(nam.size);

// setTimeout(() => {
//   console.log("work1")
//   setTimeout(() => {
//     console.log("work2")
//   }, 1000);
//   console.log("End");
// }, 1000);

// console.log("here")
