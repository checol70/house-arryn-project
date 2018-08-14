module.exports = function(sequelize, DataTypes) {
    var mealPlan = sequelize.define("mealPlan", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING
    });
  
    mealPlan.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      mealPlan.hasMany(models.recipes, {
        onDelete: "cascade"
      });
    };
  
    return mealPlan;
  };