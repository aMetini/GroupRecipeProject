'use strict';

const getRecipes = function () {
    fetch('../data/db.json')
        .then(response => response.json())
            .then(data => listRecipes(data.recipes))
}


getRecipes();

function listRecipes (recipes) {

    recipes.forEach(recipe => {
        const recipeContainer = document.querySelector('.container');

        let result = 
        `<section class="recipe"> 
            <div class="recipe-header">
                <h2 class="recipe-title">${recipe.title}</h2>
                <div class="recipe-img">
                   <img src="./img/pancakes.jpg" alt="${recipe.title}">
                </div>
            </div> 
            <div class="ingredients">
                <div class="subtitle">What to use... (for 4 persons)</div>
                <ul class="ingredientItem">
                    <li>INGREDIENT1</li>
                </ul>
            </div>
            <div class="instructions">
            <div class="subtitle">How to make it...</div>
            <div> ${recipe.steps} </div>
        </section>
        `;

        recipeContainer.insertAdjacentHTML('beforeend', result);
   
    });
}

// function listIngredients () {
//     const ingList = document.querySelector('.ingredientItem');
//     let result = '';
//     for (let ingredient of ingredients) {
//         result +=  `<li> ${ingredient.qty * noOfPortions} ${ingredient.unit} ${ingredient.ingredient} </li> `;
//     };
//     ingList.innerHTML = result;
// }

