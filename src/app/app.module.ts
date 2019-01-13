import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { RecipeBookComponent } from "./recipe-book/recipe-book.component";
import { RecipeListComponent } from "./recipe-book/recipe-list/recipe-list.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
		HeaderComponent,
		RecipeBookComponent,
		RecipeListComponent,
		ShoppingListComponent,
		RecipeDetailComponent,
		ShoppingListEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
