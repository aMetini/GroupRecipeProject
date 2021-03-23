'use strict';

let ingredients = [];
let noOfPortions = 4;

// ingredients list for ONE portion:
ingredients.push({ qty: 2,        unit: 'dl',    ingredient: 'Milk'});
ingredients.push({ qty: 1,        unit: '',      ingredient: 'Egg(s)'});
ingredients.push({ qty: 1,        unit: 'dl',    ingredient: 'Flour'});
ingredients.push({ qty: 0.25,     unit: 'tsp',   ingredient: 'Salt'});
ingredients.push({ qty: 0.5,      unit: 'tbsp',  ingredient: 'Butter'});

listIngredients();

function listIngredients () {
    const ingList = document.querySelector('.ingredientItem');
    let result = '';
    for (let ingredient of ingredients) {
        result +=  `<li> ${ingredient.qty * noOfPortions} ${ingredient.unit} ${ingredient.ingredient} </li> `;
    };
    ingList.innerHTML = result;
}

