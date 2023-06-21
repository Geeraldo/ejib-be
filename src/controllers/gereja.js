const GerejaModel = require('../models/gerejaModel.js');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await GerejaModel.getAllUsers();

        res.status(200).json({
            message: 'GET all users success',
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
    getAllUsers
}
