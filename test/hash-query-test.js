const test = QUnit.test;

QUnit.module('hash query test');

function writeSearchToQuery(existingQuery, q) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('q', q);
    searchParams.set('page', 1);
    return searchParams.toString();
}

function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('q', 'beef');
    searchParams.set('page', page);
    return searchParams.toString();
}
test('add search to empty query', assert => {
    // arrange
    const expected = 'q=chicken+breast&page=1';

    const existingQuery = '';
    const q = 'chicken breast';

    // act
    const result = writeSearchToQuery(existingQuery, q);
    
    // assert
    assert.equal(result, expected);
});

test('add search to existing query', assert => {
    // arrange
    const expected = 'q=beef&page=1';
    const existingQuery = 'q=chicken+breast&page=1';
    const q = 'beef';

    // act
    const result = writeSearchToQuery(existingQuery, q);

    // assert
    assert.equal(result, expected);
});

test('add page to query', assert => {
    // arrange
    const expected = 'q=beef&page=2';
    const existingQuery = 'q=beef&page=1';
    const page = 2;

    // act
    const result = writePageToQuery(existingQuery, page);

    // assert
    assert.equal(result, expected);
});
