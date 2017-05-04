var orm = require("../config/orm.js");

var burger = {
	tableName: "burgers",
	columnName: "burger_name",
	updateColumnName: "devoured",
	rowValue: 1,
	selectAll: function() {
		orm.selectAll(this.tableName);
	},
	insertOne: function(burgerName) {
		orm.insertOne(this.tableName, this.columnName, burgerName);
	},
	updateOne: function(burgerName) {
		orm.updateOne(this.tableName, this.updateColumnName, this.rowValue, this.columnName, burgerName);
	}
};

module.exports = burger;