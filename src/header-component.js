import { auth } from './firebase.js';


export function makeHeader() {
    const html = /*html*/`
        <section id="header-style">
            <img src='./assets/recipe-box.jpg' class="header-image">
            <h1>RecipeBox</h1>
        </section>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeProfile() {
    // const avatar = user.photoURL || './assets/recipe-box.jpg';
    const html = /*html*/`
        <div class="profile">
            <img src="./assets/recipe-box.jpg">
            <span id="user-name">user name:</span>
            <button>Sign out!</button>
        </div>
    `;
}
const headerContainer = document.getElementById('header-container');

export default function loadHeader() {
    const dom = makeHeader();
    headerContainer.appendChild(dom);

    auth.onAuthStateChanged(user => {
        if(user) {
            const userNameDisplay = document.getElementById('user-name');
            userNameDisplay.textContent = user.displayName;
            const profileDisplay = document.getElementById('user-profile');
            profileDisplay.src = user.photoURL;
        }
        else {
            //no user
        }
    });
}