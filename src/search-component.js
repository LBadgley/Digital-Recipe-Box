import { writeSearchToQuery } from './hash-query.js';
const searchForm = document.getElementById('search-form');

// export default function loadSearch() {
    //         const formData = new FormData(searchForm);
    //         const mainIngredient = formData.get('main-ingredient');
    //         console.log('click', mainIngredient);
    //     });
    
    
    // }
    

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(searchForm);
    const mainIngredient = formData.get('main-ingredient');
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeSearchToQuery(existingQuery, mainIngredient);
    window.location.hash = newQuery;
});

