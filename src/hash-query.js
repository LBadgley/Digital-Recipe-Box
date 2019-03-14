export function writeSearchToQuery(existingQuery, q) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('q', q);
    searchParams.set('page', 1);
    return searchParams.toString();
}

export function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    const query = searchParams.get('q');
    searchParams.set('q', query);
    searchParams.set('page', page);
    return searchParams.toString();
}

export function readFromQuery(query) {
    const searchParams = new URLSearchParams(query);
    const queryOptions = {
        q: searchParams.get('q'),
        page: Number(searchParams.get('page'))
    };
    return queryOptions;
}
