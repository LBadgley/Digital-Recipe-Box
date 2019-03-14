import { writePageToQuery, readFromQuery } from './hash-query.js';

// const currentPageSpan = document.getElementById('current-page');
// const totalPagesSpan = document.getElementById('total-pages');
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');

let currentPageNumber = 1;

previousButton.addEventListener('click', () => {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    previousButton.disabled = queryOptions.page <= 1;
    queryOptions.page--;
    const newQuery = writePageToQuery(existingQuery, queryOptions.page);
    window.location.hash = newQuery;
});

nextButton.addEventListener('click', () => {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    // nextButton.disabled = queryOptions.page >= total
    queryOptions.page++;
    const newQuery = writePageToQuery(existingQuery, queryOptions.page);
    window.location.hash = newQuery;
});
