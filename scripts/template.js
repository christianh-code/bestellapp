let burgerImages = [
    "veggie-burger.png",
    "all-meat-burger.png",
    "beef-red-burger.png"
];

let pizzaImages = [
    "pizza-magherita.jpg",
    "pizza-chorico.png",
    "pizzafungi.png"
];

function getMealTemplate(meal, image) {
    return `
        <article class="meal-card">
            <img class="meal-image" src="./assets/img/${image}" alt="${meal.name}">
            <div class="meal-info">
                <h3>${meal.name}</h3>
                <p>${meal.description}</p>
            </div>
            <div class="meal-actions">
                <p>${meal.price.toFixed(2).replace(".", ",")} €</p>
                <button type="button">Add to basket</button>
            </div>
        </article>`;
}