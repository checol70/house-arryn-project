var recipes = []
function Recipe(ingredientArr, stepArr, name, originalUser){
    this.ingredientArr = ingredientArr;
    this.stepArr = stepArr;
    this.name = name;
    if(originalUser){
        this.originalUser = originalUser;
    }
    recipes.push(this)
}

function Ingredient(amount, measure, name){
    this.amount = amount;
    this.measure = measure;
    this.name = name;
}
recipes.push(new Recipe([new Ingredient(1, 2, "premade burrito")], ["Microwave burrito", "Wait for it to cool"], "microwave burrito", 1));
console.log(recipes)

module.exports = {
    recipes: recipes,
    Recipe: Recipe
}