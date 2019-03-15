import loadHeader, { updateUser } from './header-component.js';
import { updateMainIngredient } from './search-component.js';
import renderMealCards from './meal-card-components.js';
import makeSearchMealUrl from './make-search-meal-url.js';
import { readFromQuery } from './hash-query.js';
import { updatePagingInfo } from './paging-component.js';
import { auth } from './firebase.js';
import './check-auth.js';

loadHeader();
// auth.onAuthStateChanged(user => {
    
//     if(!user) {
//         window.location = 'auth.html';
//         return;
//     } else {
//         loadHeader(user);
//     }
// });

// function loadQuery() {
//     const query = window.location.hash.slice(1);
//     const queryOptions = readFromQuery(query);
//     updateMainIngredient(queryOptions.q);

//     const url = makeSearchMealUrl(queryOptions);
// }

window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    updateMainIngredient(queryOptions.q);
    const url = makeSearchMealUrl(queryOptions);
    const searchParams = new URLSearchParams(url);
    const currentPage = Number(searchParams.get('page'));
    fetch(url)
        .then(response => response.json())
        .then(result => {
            renderMealCards(result.recipes);
            updatePagingInfo(currentPage);
        });
});
