const mysql = require('mysql2');

const dbPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "sikeuangan"
});

module.exports = dbPool.promise();
