const recipeBox = document.getElementById('recipe-box');

export default function renderMealCards(meals) {
    meals.forEach(meal => {
        const dom = makeRecipeCard(meal);
        recipeBox.appendChild(dom);
    });
}


export function makeRecipeCard(meal) {
    const html = /*html*/`
        <li>
            <p><a href=${meal.strSource} target="_blank">${meal.strMeal}</a></p>
            <img src=${meal.strMealThumb} alt="image of ${meal.strMeal}">
            <p>Cuisine: ${meal.strArea}</p>
            <p><a href=${meal.strYoutube} target="_blank">Video</a></p>
        </li>
    `;   
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}