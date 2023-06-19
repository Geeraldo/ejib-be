const mysql = require('mysql2');

const dbPool = mysql.createPool({
    host: "#####",
    user: "#####",
    password: "####",
    database: "#####"
});

module.exports = dbPool.promise();
