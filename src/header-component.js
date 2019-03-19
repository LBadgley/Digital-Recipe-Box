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

export function makeProfile(user) {
    const avatar = user.photoURL || './assets/recipe-box.jpg';
    const html = /*html*/`
        <div class="profile">
            <img src="${avatar}">
            <span id="user-name">${user.displayName}</span>
            <button>Sign out!</button>
        </div>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const headerContainer = document.getElementById('header-container');
export default function loadHeader(options) {
    const dom = makeHeader();
    const header = dom.querySelector('section');
    headerContainer.appendChild(dom);

    if(options && options.skipAuth) {
        return;
    }
    
    auth.onAuthStateChanged(user => {
        if(user) {
            const userDom = makeProfile(user);
            const signOutButton = userDom.querySelector('button');
            signOutButton.addEventListener('click', () => {
                auth.signOut();
                window.location.hash = '';
            });
            header.appendChild(userDom);
        } else {
            //no user
            window.location = './auth.html' + window.location.hash;
        }
    });
}
export function updateUser(user) {
    const userName = document.getElementById('user-name');
    userName.textContent = user.displayName;
}
