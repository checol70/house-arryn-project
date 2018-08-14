var path = require("path");
var express = require("express");
var db = require("../models");

var recipes = []
function Recipe(ingredientArr, stepArr, name, originalUser){
    this.ingredientArr = ingredientArr;
    this.stepArr = stepArr;
    this.name = name;
    if(originalUser){
        this.originalUser = originalUser;
    }
    recipes.push(this)
}

function Ingredient(amount, measure, name){
    this.amount = amount;
    this.measure = measure;
    this.name = name;
}

console.log(JSON.stringify(new Recipe([new Ingredient(1, "item", "Frozen Burrito")], ["microwave burrito", "let it cool", "eat it"], "microwave burritos", 1)))
module.exports = function(app){
    app.get("/", function(req, res){
        // random recipe stuff can go here.
        res.sendFile(path.join(__dirname, "../index.html"));
    })

    app.get("/recipes", function(req,res){
        //  var hbsObject ={
        //      recipes: recipes.recipes
        //  }
        db.Recipe.all().then(rec=>{
            console.log("rec= " + rec)
            var j = JSON.parse(JSON.stringify(rec))
            console.log("j= ",j)
            // rec.forEach(element => {
            //     console.log(JSON.parse(element))
            // });   
         res.render(j)
        })
        // res.render("recipeList", hbsObject)
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