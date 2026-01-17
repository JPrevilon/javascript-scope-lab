// Global scope variables
const burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

function addBurger() {
  // Function-scoped variable
  const newBurger = "Flatburger";
  burgers.push(newBurger);
}

if(true) {
  // Block-scoped variable
  const anotherNewBurger = "Maple Bacon Burger";
  burgers.push(anotherNewBurger);
}

function changeFeaturedDrink() {
  featuredDrink = "The JavaShake";
}
