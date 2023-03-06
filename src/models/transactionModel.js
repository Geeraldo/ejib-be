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
const getAllPengeluaranByGereja = ({id}) => {
    const SQLQuery = `
    SELECT
            *
        FROM
            pengeluaran
            LEFT JOIN gereja ON gereja.IdGereja = pengeluaran.gerejaId
        WHERE
            userId = ${id}`;

    return dbPool.execute(SQLQuery);
}
const getResultPengeluaranByGereja = ({gerejaId}) => {
    const SQLQuery = `
            SELECT
            SUM(pengeluaran.pengeluaranJumlah) AS total_pengeluaran
        FROM
            pengeluaran
            LEFT JOIN gereja ON gereja.IdGereja = pengeluaran.gerejaId
        WHERE
            pengeluaran.gerejaId = ${gerejaId}`;

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
    getResultPengeluaran,
    getResultPengeluaranByGereja
}