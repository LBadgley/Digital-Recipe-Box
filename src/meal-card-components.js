import { auth, favoritesByUserRef } from '../src/firebase.js';

export function makeRecipeCard(meal) {
    const html = /*html*/`
        <li>
            <span class="favorite-star">☆</span>
            <a href=${meal.f2f_url} target="_blank">${meal.title}</a>
            <img src=${meal.image_url} alt="image of ${meal.title}">
            <a href=${meal.publisher_url} target="_blank">${meal.publisher}</a>
            <span id="recipe-id">${meal.recipe_id}</span>
        </li>
    `;   
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const recipeBox = document.getElementById('recipe-box');


export default function updateRecipes(meals) {
    clearCards();

    meals.forEach(meal => {
        const dom = makeRecipeCard(meal);
        const favoriteStar = dom.querySelector('.favorite-star');

        const userId = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userId);
        const userFavoriteRecipeRef = userFavoritesRef.child(meal.recipe_id);
        userFavoriteRecipeRef.once('value')
            .then(snapshot => {
                const value = snapshot.val();
                let isFavorite = false;
                if(value) {
                    addFavorite();
                }
                else {
                    removeFavorite();
                }

                function addFavorite() {
                    isFavorite = true;
                    favoriteStar.textContent = '★';
                    favoriteStar.classList.add('favorite');
                }
                function removeFavorite() {
                    isFavorite = false;
                    favoriteStar.textContent = '☆';
                    favoriteStar.classList.remove('favorite');
                }
                favoriteStar.addEventListener('click', () => {
                    if(isFavorite) {
                        userFavoriteRecipeRef.remove();
                        removeFavorite();
                    }
                    else {
                        userFavoriteRecipeRef.set({
                            recipe_id: meal.recipe_id,
                            title: meal.title,
                            image_url: meal.image_url,
                            publisher: meal.publisher,
                            f2f_url: meal.f2f_url,
                        });
                        addFavorite();
                    }
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