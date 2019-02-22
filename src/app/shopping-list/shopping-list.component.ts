import { Component } from "@angular/core";

import { Ingredient } from "../shared/Ingredient";

@Component({
	selector: "app-shopping-list",
	templateUrl: "./shopping-list.component.html"
})
export class ShoppingListComponent {
	ingredient: Ingredient[] = [new Ingredient('apples', 5), new Ingredient('tomatoes', 10), new Ingredient('0',0)];

	constructor() {

	}
}