const dbPool = require('../config/db');

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

const getAllPemasukan = () => {
    const SQLQuery = `SELECT
        *
    FROM
	setoranDetil`

    return dbPool.execute(SQLQuery);
}
const getAllPemasukanByGerejaId = ({gerejaId}) => {
    const SQLQuery = `
    SELECT
	*
FROM
	setoranDetil
WHERE
	setoranDetil.gerejaId = ${gerejaId}`;

    return dbPool.execute(SQLQuery);
}
const getResultPemasukanByGereja = ({gerejaId}) => {
    const SQLQuery = `
    SELECT
        gerejaId,
        (SUM(jmlKolom) + SUM(jmlPKB) + SUM(jmlWKI) + + SUM(jmlPemuda) + SUM(jmlRemaja) + SUM(jmlPemuda) + SUM(jmlLainnya1) + SUM(jmlLainnya2) + SUM(jmlLainnya3)) AS total,
        gereja.KeteranganGereja
    FROM
        setoranDetil
        LEFT JOIN gereja ON gerejaId = gereja.IdGereja
    WHERE
        setoranDetil.gerejaId = ${gerejaId}
    GROUP BY
        gerejaId`;
    return dbPool.execute(SQLQuery);
}
const getResultPengeluaranGerejaImanuelbahu = () => {
    const pengeluaran = `
    SELECT
    SUM(pengeluaranJumlah) AS total_pengeluaran
FROM
    pengeluaran
    where gerejaId = '1'`;
    return dbPool.execute(pengeluaran);
}
const getResultPemasukanGerejaImanuelbahu = () => {
    const SQLQuery = `
    SELECT
    SUM(jmlSetoranDetil) AS total_pendapatan
FROM
    pengeluaran
    where gerejaId = '1'`;
    return dbPool.execute(SQLQuery);
}
const getRecentTransaction = () => {
    const SQLQuery = `SELECT pengeluaranId, DATE_FORMAT(pengeluaran.pengeluaranTanggal, '%Y-%m-%d') as tanggal, pengeluaranNama, pengeluaranKeterangan, pengeluaranJumlah, gereja.IdGereja, gereja.KeteranganGereja
    FROM pengeluaran
    LEFT JOIN gereja on pengeluaran.gerejaId = gereja.IdGereja
    WHERE DATE_FORMAT(pengeluaran.pengeluaranTanggal, '%Y-%m-%d') = CURDATE()`;
    return dbPool.execute(SQLQuery);
}
const getRecentTransactionPemasukan = () => {
    const SQLQuery = `SELECT pengeluaranId, DATE_FORMAT(pengeluaran.pengeluaranTanggal, '%Y-%m-%d') as tanggal, pengeluaranNama, pengeluaranKeterangan, pengeluaranJumlah, gereja.IdGereja, gereja.KeteranganGereja
    FROM pengeluaran
    LEFT JOIN gereja on pengeluaran.gerejaId = gereja.IdGereja
    WHERE DATE_FORMAT(pengeluaran.pengeluaranTanggal, '%Y-%m-%d') = CURDATE()`;
    return dbPool.execute(SQLQuery);
}





module.exports = {
    getAllPemasukan,
    getAllPengeluaran,
    getAllPengeluaranByGereja,
    getResultPengeluaran,
    getAllPemasukanByGerejaId,
    getResultPemasukanByGereja,
    getResultPemasukanGerejaImanuelbahu,
    getResultPengeluaranGerejaImanuelbahu,
    getRecentTransaction,
    getAllPengeluaranByGereja
}