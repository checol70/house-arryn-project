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
            res.render("layouts/recipeList", hbsObject)
        })
=======
    app.get("/recipes", function(req,res){
        var hbsObject ={
          recipes: recipes.recipes
        }
        console.log("AAAAAAAAAAAAAAAAAAAAA" + JSON.stringify(hbsObject.recipes));
        // res.json(recipes.recipes)
        // res.end()
        res.render("recipeList", hbsObject)
>>>>>>> bdee4945482f80c2857fcb3abca58c129d2ebdad
    })


    app.get("/add/recipes", function (req, res) {
        res.sendFile("add.html")
    })
<<<<<<< HEAD

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
=======
    // app.post("/recipes", function (req, res){
    //    +new recipes.Recipe(req.body.ingredients, req.body.steps, req.body.name, req.body.user);
    //    console.log(req.body)
    //     console.log(recipes.recipes)
    //     res.json(req.body);
    // })
    app.put("/recipes/:id", function (req,res){
>>>>>>> bdee4945482f80c2857fcb3abca58c129d2ebdad

    })
}