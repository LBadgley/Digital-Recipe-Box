import meal from '../data/meal.js';

const test = QUnit.test;
QUnit.module('recipe card template');

function makeRecipeCard(meal) {
    const html = /*html*/`
        <li>
            <p><a href=${meal.strSource}>${meal.strMeal}</a></p>
            <img src=${meal.strMealThumb} alt="image of ${meal.strMeal}">
            <p>Cuisine: ${meal.strArea}</p>
            <p><a href=${meal.strYoutube} target="_blank">Video</a></p>
        </li>
    `;   
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('make recipe card', assert => {
    //arrange
    const expected = /*html*/`
        <li>
            <p><a href="https://www.bbcgoodfood.com/recipes/13139/onepan-chicken-couscous">Chicken Couscous</a></p>
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