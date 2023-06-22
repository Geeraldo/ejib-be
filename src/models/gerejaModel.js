const dbPool = require('../config/db');

const getAllUsers = () => {
    const SQLQuery = `SELECT
	id_user,
	nama_user,
	username,
	jabatan,
	ROLE,
	GerejaId,
	foto,
	IdGereja,
	NamaGereja,
	userId,
	KeteranganGereja
FROM
	users
	LEFT JOIN gereja ON users.GerejaId = gereja.IdGereja
	WHERE jabatan = "Gereja"`;

    return dbPool.execute(SQLQuery);
}




module.exports = {
    getAllUsers,
}
