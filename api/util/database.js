const mysql = require("mysql2");

// Hardcoded credentials since it's a prototype
const pool = mysql.createConnection({
  user: "blueboard",
  password: "blueboard",
  database: "blueboard",
  host: "localhost",
});

module.exports = pool.promise();
