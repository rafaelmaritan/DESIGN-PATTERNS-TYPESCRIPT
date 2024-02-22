import { CompositeMeal } from "../classes/composite-meal";
import { Beans, Beverage, Dessert, Meat, Rice } from "../classes/meals";
import { MealBuilderProtocol } from "./meal-builder-protocol";

export class VeganBuilder implements MealBuilderProtocol {
  private _meal: CompositeMeal = new CompositeMeal();

  reset(): void {
    this._meal = new CompositeMeal();
  }

  makeMeal(): this {
    const rice = new Rice("Arroz", 5);
    const beans = new Beans("Feijao", 10);

    this._meal.add(rice, beans);
    return this;
  }

  getMeal(): CompositeMeal {
    return this._meal;
  }
}
