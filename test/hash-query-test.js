import { writeSearchToQuery, writePageToQuery, readFromQuery } from '../src/hash-query.js';
const test = QUnit.test;

QUnit.module('hash query test');

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

test('read options from query', assert => {
    //arrange
    const query = 'q=beef&page=2';
    const expected = {
        q: 'beef',
        page: 2
    };
    //act
    const result = readFromQuery(query);
    //assert
    assert.deepEqual(result, expected);
});