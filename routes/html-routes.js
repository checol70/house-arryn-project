var path = require("path");
var express = require("express");
var db = require("../models");

function Recipe(ingredientArr, stepArr, name, originalUser) {
    this.ingredientArr = ingredientArr;
    this.stepArr = stepArr;
    this.name = name;
    if (originalUser) {
        this.originalUser = originalUser;
    }
}

function Ingredient(amount, measure, name) {
    this.amount = amount;
    this.measure = measure;
    this.name = name;
}

module.exports = function (app) {
    app.get("/", function (req, res) {
        // random recipe stuff can go here.
        res.sendFile(path.join(__dirname, "../index.html"));
    })

<<<<<<< HEAD
    app.get("/recipes", function(req,res){
<<<<<<< HEAD
        //  var hbsObject ={
        //      recipes: recipes.recipes
        //  }
        console.log(console.log(recipes.recipes))
        res.json(recipes.recipes)
        res.end()
        // res.render("recipeList", hbsObject)
=======
        var hbsObject ={
          recipes: recipes.recipes
        }
        console.log(console.log(recipes.recipes))
        // res.json(recipes.recipes)
        // res.end()
        res.render("layouts/recipeList", hbsObject)
>>>>>>> b9c3396b824bf5530ec2f33f92b996121bebb75f
=======
    app.get("/recipes", function (req, res) {
        db.Recipe.all().then(rec => {
            console.log(typeof step)
            var recips = []
            for (var i = 0; i < rec.length; i++) {
                var ing = []
                var ingred = rec[i].ingredients
                parsedIng = JSON.parse(ingred)
                var step = JSON.parse(rec[i].steps)

                for (var j = 0; j < parsedIng.length; j++) {
                    ing.push(new Ingredient(parsedIng[j].amount, parsedIng[j].measure, parsedIng[j].name));
                }
                
                console.log("ing =", ing)
                recips.push(new Recipe(ing, step, rec[i].name, rec[i].originalUser));

            }
            // steps not set right here
            console.log(recips)
            var hbsObject = {
                recipes: recips
            }
            res.render("recipeList", hbsObject)
        })
>>>>>>> c304ff189187b74e2ccd95708168359304ce6ecb
    })


    app.get("/add/recipes", function (req, res) {
        res.sendFile("add.html")
    })

    // name: DataTypes.STRING,
    // ingredients: DataTypes.TEXT,
    // steps: DataTypes.TEXT,
    // originalUser: DataTypes.INTEGER


    app.post("/recipes", function (req, res) {
        console.log(req.body);
        db.Recipe.create({
            name: req.body.name,
            ingredients: JSON.stringify(req.body.ingredients),
            steps: JSON.stringify(req.body.steps),
            originalUser: req.body.originalUser}).then(function(dbRecipe){
            res.json(dbRecipe)
        })
    })
    app.put("/recipes/:id", function (req, res) {

    })
}