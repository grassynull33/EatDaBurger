var connection = require("./connection.js");

var orm = {
	selectAll: function(tableInput, callback) {
		var queryString = "SELECT * from ??";
		connection.query(queryString, [tableInput], function(err, res) {
			if (err) {
				throw err;
			}
			console.log("ORM OUTPUT");
			console.log(res);
			callback(res);
		});
	},
	insertOne: function(tableInput, columnName, burgerName, callback) {
		var queryString = "INSERT INTO ?? (??) VALUES (?)";
		connection.query(queryString, [tableInput, columnName, burgerName], function(err, res) {
			if (err) {
				throw err;
			}
			console.log(res);
			callback(res);
		});
	},
	updateOne: function(tableInput, updateColumnName, rowValue, searchColumnName, burgerName, callback) {
		var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
		connection.query(queryString, [tableInput, updateColumnName, rowValue, searchColumnName, burgerName], function(err, res) {
			if (err) {
				throw err;
			}
			console.log(res);
			callback(res);
		});
	}
};

module.exports = orm;