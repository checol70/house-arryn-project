module.exports = function(sequelize, DataTypes){
    var Users = sequelize.define("Users",{
        name: DataTypes.STRING
    })

    Users.associate = function(models){
        Users.hasOne(models.MealPlan,{
            onDelete: "cascade"
          })
    }

    return Users;
}