import { makeProfile, makeHeader } from '../src/header-component.js';


const test = QUnit.test;
QUnit.module('header tests');


// export function makeHeader() {
//     const html = /*html*/`
//         <section id="header-style">
//             <img src='./assets/recipe-box.jpg' class="header-image">
//             <h1>RecipeBox</h1>
//         </section>
//     `;
//     const template = document.createElement('template');
//     template.innerHTML = html;
//     return template.content;
// }

// export function makeProfile() {
//     // const avatar = user.photoURL || './assets/recipe-box.jpg';
//     return /*html*/`
//         <div class="profile">
//             <img src="./assets/recipe-box.jpg">
//             <span id="user-name">user name:</span>
//             <button>Sign out!</button>
//         </div>
//     `;
// }
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
    const expected = /*html*/`
        <div class="profile">
            <img src="./assets/recipe-box.jpg">
            <span id="user-name">user name:</span>
            <button>Sign out!</button>
        </div>
    `;

    const result = makeProfile();
    

    assert.equal(result, expected);
});