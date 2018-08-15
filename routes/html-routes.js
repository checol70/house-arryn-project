var path = require("path");
var express = require("express");

var recipes = require("../models/recipes.js")

module.exports = function(app){
    app.get("/", function(req, res){
        // console.log("hit /")
        res.sendFile(path.join(__dirname, "../index.html"));
    })

    app.get("/recipes", function(req,res){
        var hbsObject ={
          recipes: recipes.recipes
        }
        console.log("AAAAAAAAAAAAAAAAAAAAA" + JSON.stringify(hbsObject.recipes));
        // res.json(recipes.recipes)
        // res.end()
        res.render("recipeList", hbsObject)
    })
    app.get("/add/recipes", function(req, res){
        res.sendFile("add.html")
    })
    // app.post("/recipes", function (req, res){
    //    +new recipes.Recipe(req.body.ingredients, req.body.steps, req.body.name, req.body.user);
    //    console.log(req.body)
    //     console.log(recipes.recipes)
    //     res.json(req.body);
    // })
    app.put("/recipes/:id", function (req,res){

    })
}