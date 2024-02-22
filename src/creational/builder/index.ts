// import { CompositeMeal } from "./classes/composite-meal";
// import { Beans, Meat, Rice } from "./classes/meals";

import { MainDishBuilder } from "./interfaces/main-dishe-builder";
import { VeganBuilder } from "./interfaces/vegan-dish-builder";

// const rice = new Rice("Arroz", 5);
// const beans = new Beans("Feijao", 10);
// const meat = new Meat("Carne", 11);

// const compositeMeal = new CompositeMeal();
// compositeMeal.add(rice, beans, meat);
// console.log(compositeMeal);
// console.log(compositeMeal.getPrice());

const mainDishBuilder = new MainDishBuilder();
const veganDishBuilder = new VeganBuilder();
mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getMeal().getPrice());

mainDishBuilder.reset();

mainDishBuilder.makeMeal().makeBeverage();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getMeal().getPrice());

veganDishBuilder.makeMeal();
console.log(veganDishBuilder.getMeal());
console.log(veganDishBuilder.getMeal().getPrice());
