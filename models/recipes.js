<<<<<<< HEAD
var recipes = []
function Recipe(ingredientArr, stepArr, name, originalUser){
    this.ingredientArr = ingredientArr;
    this.stepArr = stepArr;
    this.name = name;
    if(originalUser){
        this.originalUser = originalUser;
    }
<<<<<<< HEAD
    recipes.push(this)
=======
>>>>>>> b9c3396b824bf5530ec2f33f92b996121bebb75f
}

function Ingredient(amount, measure, name){
    this.amount = amount;
    this.measure = measure;
    this.name = name;
}
recipes.push(new Recipe([new Ingredient(1, 2, "premade burrito")], ["Microwave burrito", "Wait for it to cool"], "microwave burrito", 1));
<<<<<<< HEAD
console.log(recipes)
=======
recipes.push(new Recipe([new Ingredient(1, "cup", "dry italian bread crumbs"), new Ingredient(1/2, "cup", "parmasian cheese")],
["Preheat oven to 400", "Pound chicken breast until equal thickness", "place foil on baking sheet and spray with pam", "dredge chicken in bread crumb mix and place on baking tray","bake 25 minutes or until done"], 
"baked parmesian chicken", 1));

console.log(JSON.stringify(recipes, null, 2));
console.log(JSON.stringify(recipes.ingredientArr, null, 2));

// console.log(recipes.ingredientArr);


>>>>>>> b9c3396b824bf5530ec2f33f92b996121bebb75f

module.exports = {
    recipes: recipes,
    Recipe: Recipe
=======

module.exports = function(sequelize, DataTypes){
    var Recipe = sequelize.define("Recipe",{
        name: DataTypes.STRING,
        ingredients: DataTypes.TEXT,
        steps: DataTypes.TEXT,
        originalUser: DataTypes.INTEGER
    })

    return Recipe;
>>>>>>> c304ff189187b74e2ccd95708168359304ce6ecb
}