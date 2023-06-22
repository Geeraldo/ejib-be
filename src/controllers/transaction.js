const transactionModel = require('../models/transactionModel.js');


const getAllPengeluaranByGereja = async (req, res) => {
    const {id} = req.params;
    try {
        const [data] = await transactionModel.getAllPengeluaranByGereja({id});

        res.status(200).json({
            message: res.message,
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}
const getAllPengeluaran = async (req, res) => {
    try {
        const [data] = await transactionModel.getAllPengeluaran();

        res.status(200).json({
            message: res.message,
             data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}
const resultPengeluaran = async (req, res) => {
    try {
        const [data] = await transactionModel.getResultPengeluaran();

        res.status(200).json({
            message: res.message,
            data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}
const resultPengeluaranByGerejaId = async (req, res) => {
    const {gerejaId} = req.params;
    try {
        const [data] = await transactionModel.getResultPengeluaran({gerejaId});

        res.status(200).json({
            message: res.message,
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}
const getAllPemasukan = async (req, res) => {
    try {
        const [data] = await transactionModel.getAllPemasukan();

        res.status(200).json({
            message: res.message,
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}
const getAllPemasukanByGerejaId = async (req, res) => {
    const {gerejaId} = req.params
    try {
        const [data] = await transactionModel.getAllPemasukanByGerejaId({gerejaId});

        res.status(200).json({
            message: res.message,
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}
const resultPemasukanByGerejaId = async (req, res) => {
    const {gerejaId} = req.params;
    try {
        const [data] = await transactionModel.getResultPemasukanByGereja({gerejaId});

        res.status(200).json({
            message: res.message,
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}
const getPendapatanGereja = async (req, res) => {


        const [pengeluaranImanuelBahu] =  await transactionModel.getResultPengeluaranGerejaImanuelbahu();
        const [pemasukanImanuelBahu] =  await transactionModel.getResultPemasukanGerejaImanuelbahu();


        const dataPendapatan = {
            pengeluaran: pengeluaranImanuelBahu.json(),
            pemasukan: pemasukanImanuelBahu.json()
        }
        return dataPendapatan.status(200).json()

        // // res.status(200).json({
        // //     message: res.message,
        // //     data: {
        // //         pemasukanImanuelBahu : pemasukanImanuelBahu,
        // //         pengeluaranImanuelBahu : pengeluaranImanuelBahu,
        // //     }
        // // })

    }
module.exports = {
    getAllPengeluaranByGereja,
    getAllPengeluaran,
    resultPengeluaran,
    resultPengeluaranByGerejaId,
    getAllPemasukan,
    getAllPemasukanByGerejaId,
    resultPemasukanByGerejaId,
    getPendapatanGereja
}