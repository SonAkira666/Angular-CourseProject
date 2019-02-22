import { Component, Output, EventEmitter} from "@angular/core";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
	@Output() showSections = new EventEmitter<{viewRecipes: boolean, viewShoppingList: boolean}>();

	showRecipes() {
		console.log('RECIPPIE!');
		this.showSections.emit({viewRecipes: true, viewShoppingList: false});
	}
	showShoppingList() {
		console.log('LA LISTA!');
		this.showSections.emit({viewRecipes: false, viewShoppingList: true});
	}
}