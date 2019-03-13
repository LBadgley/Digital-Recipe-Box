import meal from '../data/meal.js';

import { makeRecipeCard } from '../src/meal-card-components.js';

const test = QUnit.test;
QUnit.module('recipe card template');

test('make recipe card', assert => {
    //arrange
    const expected = /*html*/`
        <li>
            <p><a href="http://food2fork.com/view/8c0314" target="_blank">Chicken and cashew nut stir-fry</a></p>
            <img src="http://static.food2fork.com/chickenandcashewnuts_89299_16x9986b.jpg" alt="image of Chicken and cashew nut stir-fry">
            <p><a href="http://www.bbc.co.uk/food" target="_blank">BBC Food</a></p>
        </li>
    `;
    //act
    const result = makeRecipeCard(meal);
    //assert
    assert.htmlEqual(result, expected);

});
