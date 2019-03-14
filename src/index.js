// import meals from '../data/meals.js';
import renderMealCards from './meal-card-components.js';
import { updateMainIngredient } from './search-component.js';
import './search-component.js';
import './paging-component.js';
import { readFromQuery } from './hash-query.js';
import makeSearchMealUrl from './make-search-meal-url.js';


window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    updateMainIngredient(queryOptions.q);
    const url = makeSearchMealUrl(queryOptions);
    console.log(url);
    // fetch(url)
    //     .then(response => response.json())
    //     .then(result => result.recipes)
    //     .then(meals => {
    //         renderMealCards(meals);
    //     });
});