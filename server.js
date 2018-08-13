
require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");


var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}



module.exports = app;
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


require("./routes/html-routes.js")
require("./routes/api-routes")

//db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("app listening at localhost:" + PORT)
    })
//})
