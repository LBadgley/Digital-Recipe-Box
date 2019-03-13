const test = QUnit.test;
QUnit.module('recipe card template');

function makeRecipeCard() {
    const html = /*html*/`
        <li>
            <p>Chicken Couscous</p>
            <img src="https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg" alt="image of Chicken Couscous">
            <p>Meal Id: 52850</p>
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
            <p>Chicken Couscous</p>
            <img src="https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg" alt="image of Chicken Couscous">
            <p>Meal Id: 52850</p>
        </li>`;
    //act
    const result = makeRecipeCard();
    //assert
    assert.htmlEqual(result, expected);

});