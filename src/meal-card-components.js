import { auth, favoritesByUserRef } from '../src/firebase.js';


export function makeRecipeCard(meal) {
    const html = /*html*/`
        <li>
            <span class="favorite-star">☆</span>
            <a href=${meal.f2f_url} target="_blank">${meal.title}</a>
            <img src=${meal.image_url} alt="image of ${meal.title}">
            <a href=${meal.publisher_url} target="_blank">${meal.publisher}</a>
        </li>
    `;   
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const recipeBox = document.getElementById('recipe-box');

export default function renderMealCards(meals) {
    clearCards();
    meals.forEach(meal => {
        const dom = makeRecipeCard(meal);
        recipeBox.appendChild(dom);
        const favoriteStar = dom.querySelector('.favorite-star');
        favoriteStar.addEventListener('click', () => {
            const userId = auth.currentUser.uid;
            const userFavoritesRef = favoritesByUserRef.child(userId);
            const userFavoriteRecipeRef = userFavoritesRef.child(meal.count);
            userFavoriteRecipeRef.set({
                id: meal.count,
                title: meal.title,
                image: meal.image_url,
                publisher: meal.publisher_url
            });
        });
        recipeBox.appendChild(dom);
    });
}

function clearCards() {
    while(recipeBox.children.length > 0) {
        recipeBox.lastElementChild.remove();
    }
}