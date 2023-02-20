const dbPool = require('../config/db.js');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';

    return dbPool.execute(SQLQuery);
}




module.exports = {
    getAllUsers,
}