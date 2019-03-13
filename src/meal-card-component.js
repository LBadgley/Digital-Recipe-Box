export function makeRecipeCard(meal) {
    const html = /*html*/`
        <li>
            <p><a href=${meal.strSource}>${meal.strMeal}</a></p>
            <img src=${meal.strMealThumb} alt="image of ${meal.strMeal}">
            <p>Cuisine: ${meal.strArea}</p>
            <p><a href=${meal.strYoutube} target="_blank">Video</a></p>
        </li>
    `;   
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}