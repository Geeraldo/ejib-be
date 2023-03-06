const dbPool = require('../config/db');

const getAllPemasukan = () => {
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
	LEFT JOIN gereja ON users.GerejaId = gereja.IdGereja`;

    return dbPool.execute(SQLQuery);
}
const getAllPengeluaranByGereja = () => {
    const SQLQuery = `SELECT
        *
    FROM
        pengeluaran
    WHERE
        gerejaId = '1'`;

    return dbPool.execute(SQLQuery);
}
const getAllPengeluaran = () => {
    const SQLQuery = `SELECT
        *
    FROM
        pengeluaran`

    return dbPool.execute(SQLQuery);
}
const getResultPengeluaran = () => {
    const SQLQuery = `SELECT
        SUM(pengeluaranJumlah) AS total_pengeluaran
    FROM
        pengeluaran`

    return dbPool.execute(SQLQuery);
}







module.exports = {
    getAllPemasukan,
    getAllPengeluaran,
    getAllPengeluaranByGereja,
    getResultPengeluaran
}