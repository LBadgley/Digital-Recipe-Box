// import meals from '../data/meals.js';
import './check-auth.js';
import { auth } from './firebase.js';

import loadHeader from './header-component.js';
import renderMealCards from './meal-card-components.js';
import { updateMainIngredient } from './search-component.js';
import './search-component.js';
import { updatePagingInfo } from './paging-component.js';
import { readFromQuery } from './hash-query.js';
import makeSearchMealUrl from './make-search-meal-url.js';


loadHeader();

window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    updateMainIngredient(queryOptions.q);
    const url = makeSearchMealUrl(queryOptions);
    const searchParams = new URLSearchParams(url);
    const currentPage = Number(searchParams.get('page'));
    // fetch(url)
        .then(response => response.json())
        .then(result => {
            renderMealCards(result.recipes);
            // const pagingInfo = {
            //     currentPage: result.page,
            //     totalPages: result.total_pages
            // }; 
            updatePagingInfo(currentPage);
        });
});
