import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CourseProject';
	viewRecipes: boolean = true;
	viewShoppingList: boolean = false;

	onNavigation(headerData: {viewRecipes: boolean, viewShoppingList: boolean}) {
		this.viewRecipes = headerData.viewRecipes;
		this.viewShoppingList = headerData.viewShoppingList;
	}
}
