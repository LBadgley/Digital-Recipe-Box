import { makeHeader } from '../src/header-component.js';

const test = QUnit.test;
QUnit.module('header tests');

// function makeProfile(user) {
//     const avatar = user.photoURL || './assets/recipe-box.jpg';
//     const html = /*html*/`
//         <div class="profile">
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

// test('make profile', assert => {
//     const user = {
//         displayName: 'Mee Mee',
//         photoURL: './assets/recipe-box.jpg' 
//     };

//     const expected = /*html*/`
//         <div class="profile">
//             <span id="user-name">user name:</span>
//             <button>Sign out!</button>
//         </div>
//     `;

//     // const dom = makeProfile(user);
    

//     assert.htmlEqual(dom, expected);
// });