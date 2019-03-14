const BASE_URL = 'https://www.food2fork.com/api/search?key=';
const API_KEY = '63f112ca1f523330536f1178355e3f07';
// cheri's first API key vvv
// const API_KEY = '3029508e03964e2df91e90df762c09cd';
const MEAL_SEARCH_URL = `${BASE_URL}${API_KEY}`;
// const MEAL_SEARCH_URL = 'https://www.food2fork.com/api/search?key=3029508e03964e2df91e90df762c09cd'

export default function makeSearchMealUrl(queryOptions) {
    const url = new URL(MEAL_SEARCH_URL);
    url.searchParams.set('q', queryOptions.q);
    url.searchParams.set('page', queryOptions.page);
    return url.toString();
}