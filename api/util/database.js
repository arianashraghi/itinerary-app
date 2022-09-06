const mysql = require("mysql2");

const pool = mysql.createConnection({
  user: "blueboard",
  password: "blueboard",
  database: "blueboard",
  host: "localhost",
});

module.exports = pool.promise();
