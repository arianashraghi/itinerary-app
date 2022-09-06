const mysql = require("mysql2");

const pool = mysql.createPool({
  user: "blueboard",
  password: "blueboard",
  database: "blueboard",
  host: "localhost",
});

module.exports = pool.promise();
