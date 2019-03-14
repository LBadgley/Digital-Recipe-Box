import { writeSearchToQuery } from './hash-query.js';
const searchForm = document.getElementById('search-form');  
const mainIngredientNode = document.getElementById('main-ingredient');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    // const formData = new FormData(searchForm);
    const mainIngredient = mainIngredientNode.value;
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeSearchToQuery(existingQuery, mainIngredient);
    window.location.hash = newQuery;
    // console.log('newQuery', newQuery);
});

export function updateMainIngredient(q) {
    mainIngredientNode.value = q;
}