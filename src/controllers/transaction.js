const transactionModel = require('../models/transactionModel.js');


const getAllPengeluaranByGereja = async (req, res) => {
    const {body} = req
    console.log(object);
    try {
        const [data] = await transactionModel.getAllPengeluaranByGereja();

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
        const [data] = await transactionModel.getAllPengeluaranByGereja();

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
const resultPengeluaran = async (req, res) => {
    try {
        const [data] = await transactionModel.getResultPengeluaran();

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
module.exports = {
    getAllPengeluaranByGereja,
    getAllPengeluaran,
    resultPengeluaran
}