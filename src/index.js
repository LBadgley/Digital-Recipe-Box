import loadHeader from '../src/header-component.js';
import { updateMainIngredient } from './search-component.js';
import updateRecipes from './meal-card-components.js';
import makeSearchMealUrl from './make-search-meal-url.js';
import { readFromQuery } from './hash-query.js';
import { updatePagingInfo } from './paging-component.js';
import { auth } from './firebase.js';
import renderMealCards from '../src/meal-card-components.js';
import './check-auth.js';

loadHeader();

auth.onAuthStateChanged(() => {
    loadQuery();
});

const prompt = document.getElementById('prompt');
const recipeBox = document.getElementById('recipe-box');

function loadQuery() {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    updateMainIngredient(queryOptions.q);

    const url = makeSearchMealUrl(queryOptions);

    if(!url) {
        prompt.classList.remove('hidden');
        recipeBox.classList.add('hidden');
        return;
    } else {
        prompt.classList.add('hidden');
        recipeBox.classList.remove('hidden');
    }
    const searchParams = new URLSearchParams(url);
    const currentPage = Number(searchParams.get('page'));
    fetch(url)
        .then(response => response.json())
        .then(result => {
            try {
                updateRecipes(result.recipes);
                updatePagingInfo(currentPage);
            } catch(error) {
                console.error(error);
                console.error(result.error);
            }
        }); 
}

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
