import meal from '../data/meal.js';
import { makeRecipeCard } from '../src/meal-card-components.js';

const test = QUnit.test;
QUnit.module('recipe card template');

test('make recipe card', assert => {
    const expected = /*html*/`
        <li>
            <span class="favorite-star">☆</span>
            <a href="http://food2fork.com/view/8c0314" target="_blank">Chicken and cashew nut stir-fry</a>
            <img src="${meal.image_url}" alt="image of Chicken and cashew nut stir-fry">
            <a href="http://www.bbc.co.uk/food" target="_blank">BBC Food</a>
            <span id="recipe-id">${meal.recipe_id}</span>
        </li>
    `;

    const result = makeRecipeCard(meal);

    assert.htmlEqual(result, expected);

});
