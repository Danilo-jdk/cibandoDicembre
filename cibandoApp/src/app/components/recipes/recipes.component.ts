import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  ricette: Recipe[];

  constructor(private recipeService: RecipeService){

  }

  // LifeCycle hook
  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      next: (ricette) => {
        this.ricette = ricette;
      },
      error: (errore) => {
        console.log(errore)
      }
    })
  }

}
