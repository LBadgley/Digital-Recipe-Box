import meals from '../data/meals.js';
import renderMealCards from './meal-card-components.js';
import './search-component.js';
// loadSearch();
renderMealCards(meals);

// fetch('https://www.food2fork.com/api/search?key=3029508e03964e2df91e90df762c09cd&q=chicken%20breast&page=2')
//     .then(response => response.json())
//     .then(body => console.log(body));
    