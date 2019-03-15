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