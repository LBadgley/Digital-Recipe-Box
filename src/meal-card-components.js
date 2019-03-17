import { auth, favoritesByUserRef } from '../src/firebase.js';


export function makeRecipeCard(meal) {
    const html = /*html*/`
        <li>
            <a href=${meal.f2f_url} target="_blank">${meal.title}</a>
            <img src=${meal.image_url} alt="image of ${meal.title}">
            <a href=${meal.publisher_url} target="_blank">${meal.publisher}</a>
        </li>
    `;   
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function renderMealCards(meals) {
    clearCards();
    meals.forEach(meal => {
        const dom = makeRecipeCard(meal);
        recipeBox.appendChild(dom);
        // const favorite
    });
}

const recipeBox = document.getElementById('recipe-box');

function clearCards() {
    while(recipeBox.children.length > 0) {
        recipeBox.lastElementChild.remove();
    }
}