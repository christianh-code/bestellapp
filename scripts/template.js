function getVeggieBurgerTemplate(burger) {
    return `
        <article class="meal-card">
            <img class="meal-image" src="./assets/img/veggie-burger.png" alt="Veggie burger">
            <div class="meal-info">
                <h3>${burger.name}</h3>
                <p>${burger.description}</p>
            </div>
            <div class="meal-actions">
                <p>${burger.price.toFixed(2).replace(".", ",")} €</p>
                <button type="button">Add to basket</button>
            </div>
        </article>`;
}