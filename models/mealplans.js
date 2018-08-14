module.exports = function (sequelize, DataTypes) {
  var MealPlan = sequelize.define("MealPlan", {
    name: DataTypes.STRING,
    sun: DataTypes.INTEGER,
    mon: DataTypes.INTEGER,
    tue: DataTypes.INTEGER,
    wed: DataTypes.INTEGER,
    thur: DataTypes.INTEGER,
    fri: DataTypes.INTEGER,
    sat: DataTypes.INTEGER
  });

  MealPlan.associate = function (models) {
    MealPlan.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return MealPlan;
};