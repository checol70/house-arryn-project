var recipes = []

function Recipe(ingredientArr, stepArr, name, originalUser){
    this.ingredientArr = ingredientArr;
    this.stepArr = stepArr;
    this.name = name;
    if(originalUser){
        this.originalUser = originalUser;
    }
    recipes.push(this);
}
function Ingredient(amount, measure, name){
    this.amount = amount;
    this.measure = measure;
    this.name = name;
}
var users = [
    "Carol",
    "Colton",
    "Micheal"
]
new Recipe([new Ingredient(1, null, "premade burrito")], ["Microwave burrito", "Wait for it to cool"], "microwave burrito", 1);

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./models")

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(express.static("public"))

require("./routes/html-routes.js")
require("./routes/api-routes")

//db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("app listening at localhost:" + PORT)
    })
//})
