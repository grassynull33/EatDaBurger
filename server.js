var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// TEST ORM METHODS
// var orm = require("./config/orm.js");

// orm.selectAll("burgers");
// orm.insertOne("burgers", "burger_name", "Big Mac");
// orm.updateOne("burgers", "devoured", 1, "burger_name", "Big Mac");

app.listen(PORT, function() {
	console.log("Listening on PORT " + PORT);
});