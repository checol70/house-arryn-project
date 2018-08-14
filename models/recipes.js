

module.exports = function(sequelize, DataTypes){
    var Recipe = sequelize.define("Recipe",{
        name: DataTypes.STRING,
        ingredients: DataTypes.TEXT,
        steps: DataTypes.TEXT,
        originalUser: DataTypes.INTEGER
    })

    return Recipe;
}