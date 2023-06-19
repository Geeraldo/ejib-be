const mysql = require('mysql2');

const dbPool = mysql.createPool({
    host: "dummyhost",
    user: "dummyuser",
    password: "dummypassword",
    database: "dummydatabase"
});

module.exports = dbPool.promise();
