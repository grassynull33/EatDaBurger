var connection = require("./connection.js");

var orm = {
	selectAll: function(tableInput) {
		var queryString = "SELECT * from ??";
		connection.query(queryString, [tableInput], function(err, res) {
			if (err) {
				throw err;
			}
			console.log(res);
			return res;
		});
	},
	insertOne: function(tableInput, columnName, burgerName) {
		var queryString = "INSERT INTO ?? (??) VALUES (?)";
		connection.query(queryString, [tableInput, columnName, burgerName], function(err, res) {
			if (err) {
				throw err;
			}
			console.log(res);
		});
	},
	updateOne: function(tableInput, updateColumnName, rowValue, searchColumnName, burgerName) {
		var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
		connection.query(queryString, [tableInput, updateColumnName, rowValue, searchColumnName, burgerName], function(err, res) {
			if (err) {
				throw err;
			}
			console.log(res);
		});
	}
};

module.exports = orm;