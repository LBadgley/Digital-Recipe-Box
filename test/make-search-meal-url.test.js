import makeSearchMealUrl from '../src/make-search-meal-url.js';
const test = QUnit.test;
QUnit.module('make URL for fetch');

test('include query and page', assert => {
    // arrange
    const expected = 'https://www.food2fork.com/api/search?key=3029508e03964e2df91e90df762c09cd&q=beef&page=1';
    const queryOptions = {
        q: 'beef',
        page: 1
    };

    // act
    const result = makeSearchMealUrl(queryOptions);

    // assert
    assert.equal(result, expected);
});