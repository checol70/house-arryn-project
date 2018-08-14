var path = require("path");
var express = require("express");

var recipes = require("../models/recipes.js")

module.exports = function(app){
    app.get("/", function(req, res){
        // console.log("hit /")
        res.sendFile(path.join(__dirname, "../add.html"));
    })

    app.get("/recipes", function(req,res){
        // var hbsObject ={
        //     recipes: recipes.recipes
        // }
        console.log("recipes hit")
        res.json(recipes)
        res.end()
        //res.render("recipeList", hbsObject)
    })
    // app.get("/add/recipes", function(req, res){
    //     res.sendFile("add.html")
    // })
    // app.post("/recipes", function (req, res){

    // })
    // app.put("/recipes/:id", function (req,res){

    // })
}