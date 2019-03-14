const recipeBox = document.getElementById('recipe-box');

export default function renderMealCards(meals) {
    clearCards();
    meals.forEach(meal => {
        const dom = makeRecipeCard(meal);
        recipeBox.appendChild(dom);
    });
}


export function makeRecipeCard(meal) {
    const html = /*html*/`
        <li>
            <p><a href=${meal.f2f_url} target="_blank">${meal.title}</a></p>
            <img src=${meal.image_url} alt="image of ${meal.title}">
            <p><a href=${meal.publisher_url} target="_blank">${meal.publisher}</a></p>
        </li>
    `;   
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

function clearCards() {
    while(recipeBox.children.length > 0) {
        recipeBox.lastElementChild.remove();
    }
}