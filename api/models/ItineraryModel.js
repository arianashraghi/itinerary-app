const database = require("../util/database");

exports.get = () => {
  return database.execute("SELECT * FROM hotels");
};
