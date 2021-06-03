export class Recipe {
    public recipeName: string = '';
    public recipeDescription: string = '';
    public recipeImage: string = '';

    constructor(recipeName: string, recipeDescription: string, recipeImage: string) {
        this.recipeName = recipeName;
        this.recipeDescription = recipeDescription;
        this.recipeImage = recipeImage;
    }
}