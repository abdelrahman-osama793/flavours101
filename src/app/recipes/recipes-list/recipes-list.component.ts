import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Grilled Sliced Brisket', 'test desc', 'https://assets.bonappetit.com/photos/57ad3f9cf1c801a1038bcadf/1:1/w_2560%2Cc_limit/grilled-sliced-brisket.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
