var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	var allBurgers = burger.selectAll();
	console.log(allBurgers);

	// var data = {
	// 	burgers: []
	// };

	// for(var i = 0; i < allBurgers.length; i++) {
	// 	data.burgers.push(allBurgers[i]);
	// }

	res.render("index");
});

module.exports = router;