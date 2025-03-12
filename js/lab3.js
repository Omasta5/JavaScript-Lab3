// Below is the function that permits the creation of a hamburger object
function Hamburger(size, isVegan, qtyPatties, veggieToppings, cheeses, condiments, qtypickles, buns) {
    this.size = size;
    this.buns = buns;
    this.isVegan = isVegan;
    this.veggieToppings = veggieToppings;
    this.condiments = condiments;
    this.cheeses = cheeses;
    this.qtyPatties = qtyPatties;
    this.qtypickles = qtypickles;
    this.beyondMeat = (isVegan) ? "no" : "angus";
    this.burgerBio = function() {
        return `A ${this.size} sized burger made with ${this.beyondMeat} meat with ${this.qtyPatties} patties on it, which contains ${this.veggieToppings}, ${this.cheeses} cheese slices, ${this.condiments}, has ${this.qtypickles} pickle slice(s) on it, all on a ${this.buns} bun.`;
    }
}
let owenOrder = new Hamburger("medium", false, 2, "lettuce", "harvetti", "ketchup and mustard", 2, "sesame seed");

burgerOutput.textContent = owenOrder.burgerBio();

let emmaOrder = new Hamburger("small", true, 1, "peppers and tomatoes", "no", "mayo", 1, "pretzel");
let allieOrder = new Hamburger("X-large", false, 3, "lettuce", "old white", "ketchup", 2, "plain");
// I threw these extra orders in for fun, and to show that they also can function when calling the method in the console