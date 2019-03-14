const test = QUnit.test;

QUnit.module('hash query test');

function writeSearchToQuery(existingQuery, q) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('q', q);
    searchParams.set('page', 1);
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

    

