import { Component } from "@angular/core";
import { Recipe } from "./recipe";

@Component({
	selector: "app-recipe-book",
	templateUrl: "./recipe-book.component.html"
})
export class RecipeBookComponent {
	recipe: Recipe[] = [];
}