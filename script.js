function init() {
    renderBurgers();
    renderPizzas();
}

function renderBurgers() {
    let burgerList = document.getElementById("burgerList");
    burgerList.innerHTML = "";

    for (let i = 0; i < burgers.length; i++) {
        burgerList.innerHTML += getMealTemplate(burgers[i], burgerImages[i]);
    }
}

function renderPizzas() {
    let pizzaList = document.getElementById("pizzaList");
    pizzaList.innerHTML = "";

    for (let i = 0; i < pizzas.length; i++) {
        pizzaList.innerHTML += getMealTemplate(pizzas[i], pizzaImages[i]);
    }
}

init();