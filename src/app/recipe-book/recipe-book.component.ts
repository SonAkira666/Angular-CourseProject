import { Component } from "@angular/core";
import { Recipe } from "./recipe";

@Component({
	selector: "app-recipe-book",
	templateUrl: "./recipe-book.component.html"
})
export class RecipeBookComponent {
	recipe: Recipe[] = [new Recipe('Parmigiana' , 'Na bella porcata.' , 'https://www.ricettedellanonna.net/wp-content/uploads/2016/05/ricetta-parmigiana-alle-melanzane.jpg') , new Recipe('Parmigiana' , 'Na bella porcata.' , 'https://www.ricettedellanonna.net/wp-content/uploads/2016/05/ricetta-parmigiana-alle-melanzane.jpg')];
}