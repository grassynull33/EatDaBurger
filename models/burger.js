var orm = require("../config/orm.js");

var burger = {
	tableName: "burgers",
	columnName: "burger_name",
	updateColumnName: "devoured",
	rowValue: 1,
	selectAll: function(callback) {
		orm.selectAll(this.tableName, function(res) {
			callback(res);
		});
	},
	insertOne: function(burgerName, callback) {
		orm.insertOne(this.tableName, this.columnName, burgerName, function(res) {
			callback(res);
		});
	},
	updateOne: function(burgerName, callback) {
		orm.updateOne(this.tableName, this.updateColumnName, this.rowValue, this.columnName, burgerName, function(res) {
			callback(res);
		});
	}
};

module.exports = burger;