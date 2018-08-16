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

module.exports = function (app) {
    app.get("/", function (req, res) {
        // random recipe stuff can go here.
        res.sendFile(path.join(__dirname, "../index.html"));
    })

    app.get("/recipes", function (req, res) {
        db.Recipe.findAll({}).then(rec => {
            console.log(typeof step)
            var recips = []
            for (var i = 0; i < rec.length; i++) {
                var ingred = rec[i].ingredients

                var parsedIng = JSON.parse(ingred)
                var step = JSON.parse(rec[i].steps)

                recips.push(new Recipe(parsedIng, step, rec[i].name, rec[i].originalUser));
            }
            // steps not set right here
            console.log(recips)
            var hbsObject = {
                recipes: recips
            }
            res.render("recipeList", hbsObject)
        })
    })
    //Added logic for search for a specific recipe name $or can be used for mulitple search items
    app.get("/recipes/:name", function (req, res) {
        db.Recipe.findAll({
            where: {
                $or: [
                    {
                        'name': { like: '%' + req.params.name + '%' }
                    },
                    {
                        'ingredients': { like: '%' + req.params.name + '%' }
                    }
                ]
            }
        }).then(rec => {
            console.log(typeof step)
            var recips = []
            for (var i = 0; i < rec.length; i++) {
                var ingred = rec[i].ingredients

                var parsedIng = JSON.parse(ingred)
                var step = JSON.parse(rec[i].steps)

                recips.push(new Recipe(parsedIng, step, rec[i].name, rec[i].originalUser));
            }
            // steps not set right here
            console.log(recips)
            var hbsObject = {
                recipes: recips
            }
            res.render("recipeList", hbsObject)
        })
    })




    //string.split(/([,\n])\w+g/)


    app.get("/add", function (req, res) {
        res.sendFile(path.join(__dirname,"../add.html"))
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
            originalUser: req.body.originalUser
        }).then(function (dbRecipe) {
            res.json(dbRecipe)
        })
    })
    app.put("/recipes/:id", function (req, res) {

    })
}