const BASE_URL = 'https://www.food2fork.com/api/search?key=';
const API_KEY = '3029508e03964e2df91e90df762c09cd';
const MEAL_SEARCH_URL = `${BASE_URL}${API_KEY}`;
// const MEAL_SEARCH_URL = 'https://www.food2fork.com/api/search?key=3029508e03964e2df91e90df762c09cd'

export default function makeSearchMealUrl(queryOptions) {
    const url = new URL(MEAL_SEARCH_URL);
    url.searchParams.set('q', queryOptions.q);
    url.searchParams.set('page', queryOptions.page);
    return url.toString();
}