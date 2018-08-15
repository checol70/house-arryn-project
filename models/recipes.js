
module.exports = function(sequelize, DataTypes){
    var Recipe = sequelize.define("Recipe",{
        name: DataTypes.STRING,
        ingredients: DataTypes.TEXT,
        steps: DataTypes.TEXT,
        originalUser: DataTypes.INTEGER
    })

<<<<<<< HEAD
    return Recipe;
=======
console.log(JSON.stringify(recipes, null, 2));
console.log(JSON.stringify(recipes.ingredientArr, null, 2));

// console.log(recipes.ingredientArr);


module.exports = {
    recipes: recipes,
    Recipe: Recipe
>>>>>>> bdee4945482f80c2857fcb3abca58c129d2ebdad
}