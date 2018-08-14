var path = require("path");
var express = require("express");

var recipes = require("../models/recipes.js")

module.exports = function(app){
    app.get("/", function(req, res){
        // console.log("hit /")
        res.sendFile(path.join(__dirname, "../index.html"));
    })

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
    })
    app.get("/add/recipes", function(req, res){
        res.sendFile("add.html")
    })
    app.post("/recipes", function (req, res){
       +new recipes.Recipe(req.body.ingredients, req.body.steps, req.body.name, req.body.user);
       console.log(req.body)
        console.log(recipes.recipes)
        res.json(req.body);
    })
    app.put("/recipes/:id", function (req,res){

    })
}