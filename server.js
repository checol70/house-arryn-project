
//require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
<<<<<<< HEAD
var db = require("./models");
=======
var recipes = require("./models/recipes.js")
var path = require('path');
// var db = require("./models");
var recipArr = recipes.recipes;
console.log(recipArr)
>>>>>>> bdee4945482f80c2857fcb3abca58c129d2ebdad

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Handlebars
app.engine("handlebars",exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Don't use anything in front of public as this will say it was already handled 
//Express.static 

app.use(express.static('public'));
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

db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("app listening at localhost:" + PORT)
    })
})
