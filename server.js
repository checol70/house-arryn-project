
//require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var recipes = require("./models/recipes.js")
// var db = require("./models");
var recipArr = recipes.recipes;
console.log(recipArr)

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Handlebars
app.engine("handlebars",exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require('./routes/html-routes.js');

routes(app);


//var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
//if (process.env.NODE_ENV === "test") {
  //syncOptions.force = true;
//}



require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

// db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("app listening at localhost:" + PORT)
    })
// })
