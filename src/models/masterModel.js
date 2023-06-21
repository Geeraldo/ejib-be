const dbPool = require('../config/db');

const getMasterSampul = () => {
    const SQLQuery = `SELECT * FROM masterSampul`;

    return dbPool.execute(SQLQuery);
}




module.exports = {
    getMasterSampul,
}
