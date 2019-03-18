const BASE_URL = 'https://www.food2fork.com/api/search?key=';
const API_KEY = '1fc36e44359934bc4670d6f59711ff9c';
const MEAL_SEARCH_URL = `${BASE_URL}${API_KEY}`;

export default function makeSearchMealUrl(queryOptions) {
    if(!queryOptions.q) {
        return '';
    }
    const url = new URL(MEAL_SEARCH_URL);
    url.searchParams.set('q', queryOptions.q);
    url.searchParams.set('page', queryOptions.page);
    return url.toString();
}