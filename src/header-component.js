const headerContainer = document.getElementById('header-container');


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
    return /*html*/`
        <div class="profile">
            <img src="./assets/recipe-box.jpg">
            <span id="user-name">user name:</span>
            <button>Sign out!</button>
        </div>
    `;
}

export default function loadHeader() {
    const dom = makeHeader();
    headerContainer.appendChild(dom);
}