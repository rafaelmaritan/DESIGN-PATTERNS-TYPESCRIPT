import { CompositeMeal } from "../classes/composite-meal";
import { Beans, Beverage, Dessert, Meat, Rice } from "../classes/meals";
import { MealBuilderProtocol } from "./meal-builder-protocol";

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: CompositeMeal = new CompositeMeal();

  reset(): void {
    this._meal = new CompositeMeal();
  }

  makeMeal(): this {
    const rice = new Rice("Arroz", 5);
    const beans = new Beans("Feijao", 10);
    const meat = new Meat("Carne", 11);
    this._meal.add(rice, beans, meat);
    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage("Suco", 5);
    this._meal.add(beverage);
    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert("Pudim", 6);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): CompositeMeal {
    return this._meal;
  }
}
