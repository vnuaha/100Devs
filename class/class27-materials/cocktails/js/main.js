//Display Recipes
document.querySelector('.prev').addEventListener('click', prevSlide)
document.querySelector('.next').addEventListener('click', nextSlide)
document.querySelector('button').addEventListener('click', getMeal)

let mealDetails =[]
function getMeal(){
  const meal = document.querySelector("input").value;
  //console.log(meal);
  const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      mealDetails=data.meals;
    console.log(mealDetails);
    document.querySelector("#ingredientList").innerHTML ='';
  })
    .catch((err) => {
      console.log(`error ${err}`);
    });
  }

  let counter =0;
  function prevSlide() {
    counter --
    if (counter > mealDetails.length - 1) {
      counter =0
    }
    document.querySelector("img").src = mealDetails[counter].strMealThumb;
    document.querySelector("h2").innerText = "Meal: " + mealDetails[counter].strMeal;
    document.querySelector("p").innerText = "Instructions:\n" + mealDetails[counter].strInstructions;
    document.querySelector("h3").innerText = "Meal Category: " + mealDetails[counter].strCategory;
    let ingredients = [];
    for (const [key, value] of Object.entries(mealDetails[counter])) {
        if (key.includes("strIngredient") && value) ingredients.push(value);
      }
      document.querySelector("#ingredientList").innerHTML += " \n" + `<li>${ingredients[counter]}</li>`;
  }


  function nextSlide() {
    counter ++
    if (counter<0) {
     counter = mealDetails.length-1;
   }
   document.querySelector("img").src = mealDetails[counter].strMealThumb;
   document.querySelector("h2").innerText = "Meal: " + mealDetails[counter].strMeal;
   document.querySelector("p").innerText = "Instructions:\n" + mealDetails[counter].strInstructions;
   document.querySelector("h3").innerText = "Meal Category: " + mealDetails[counter].strCategory;
  let ingredients = [];
    for (const [key, value] of Object.entries(mealDetails[counter])) {
        if (key.includes("strIngredient") && value) ingredients.push(value);
      }
      document.querySelector("#ingredientList").innerHTML += " \n" + `<li>${ingredients[counter]}</li>`;
 }


