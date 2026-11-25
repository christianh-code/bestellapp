function init() { // Startfunktion unserer App definieren.
    renderBurgers(); // Die Funktion zum Anzeigen der Burger aufrufen.
}

function renderBurgers() { // Festlegen, wie die Burger angezeigt werden.
    let burgerList = document.getElementById("burgerList"); // Ausgabeplatz im HTML finden und merken.
    burgerList.innerHTML = getVeggieBurgerTemplate(burgers[0]); // Erstes Burgerobjekt an die Vorlage übergeben und deren HTML anzeigen.
}

init(); // Startfunktion aufrufen, damit die Anzeige tatsächlich startet.
