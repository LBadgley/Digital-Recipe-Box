import { makeProfile, makeHeader } from '../src/header-component.js';
import user from '../data/user.js';

const test = QUnit.test;
QUnit.module('header tests');

test('make header', assert => {
    const dom = makeHeader();

    assert.htmlEqual(dom, /*html*/`
        <section id="header-style">
            <img src="./assets/recipe-box.jpg" class="header-image">
            <h1>RecipeBox</h1>
        </section>
    `);
});

test('make profile', assert => {
    const avatar = user.photoURL || './assets/recipe-box.jpg';
    const expected = /*html*/`
        <div class="profile">
            <img src="${avatar}">
            <span id="user-name">${user.displayName}</span>
            <button>Sign out!</button>
        </div>
    `;

    const result = makeProfile(user);
    
    assert.htmlEqual(result, expected);
});

test('make profile with no avatar', assert => {
    const user = { 
        displayName: 'Laura Badgley',
        photoURL: null
    };
    const expected = /*html*/ `
        <div class="profile">
            <img src="./assets/recipe-box.jpg">
            <span id="user-name">${user.displayName}</span>
            <button>Sign out!</button>
        </div>
        `;

    const result = makeProfile(user);

    assert.htmlEqual(result, expected);
});