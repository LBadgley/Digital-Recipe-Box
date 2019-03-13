import meals from '../data/meals.js';
import renderMealCards from './meal-card-components.js';
import loadFilter from './search-component.js';

loadFilter();
renderMealCards(meals);