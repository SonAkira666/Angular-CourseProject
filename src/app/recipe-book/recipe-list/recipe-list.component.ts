import { Component, Input } from "@angular/core";

import { Recipe } from "../Recipe";

@Component({
	selector: "app-recipe-list",
	templateUrl: "./recipe-list.component.html"
})
export class RecipeListComponent {
	@Input() rcp: Recipe;

	constructor() {

	}
}