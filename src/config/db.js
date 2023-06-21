
const mysql = require('mysql2');

const dbPool = mysql.createPool({
    host: "156.67.213.195",
    user: "u1571171_geedev",
    password: "Parlente24",
    database: "u1571171_sikeuangan"
});

module.exports = dbPool.promise();
