import meal from '../data/meal.js';

import { makeRecipeCard } from '../src/meal-card-components.js';

const test = QUnit.test;
QUnit.module('recipe card template');

test('make recipe card', assert => {
    //arrange
    const expected = /*html*/`
        <li>
            <p><a href="https://www.bbcgoodfood.com/recipes/13139/onepan-chicken-couscous" target="_blank">Chicken Couscous</a></p>
            <img src="https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg" alt="image of Chicken Couscous">
            <p>Cuisine: Moroccan</p>
            <p><a href="https://www.youtube.com/watch?v=GZQGy9oscVk" target="_blank">Video</a></p>
        </li>
    `;
    //act
    const result = makeRecipeCard(meal);
    //assert
    assert.htmlEqual(result, expected);

});
