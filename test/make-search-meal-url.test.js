import makeSearchMealUrl from '../src/make-search-meal-url.js';
const test = QUnit.test;
QUnit.module('make URL for fetch');

test('include query and page', assert => {
    const expected = 'https://www.food2fork.com/api/search?key=1fc36e44359934bc4670d6f59711ff9c&q=beef&page=1';
    const queryOptions = {
        q: 'beef',
        page: 1
    };

    // act
    const result = makeSearchMealUrl(queryOptions);

    // assert
    assert.equal(result, expected);
});

test('return empty string if no search term', assert => {
    // arrange
    const expected = '';
    const queryOptions = {
        q: '',
        page: 3
    };
    // act
    const result = makeSearchMealUrl(queryOptions);
    // assert
    assert.equal(result, expected);
});