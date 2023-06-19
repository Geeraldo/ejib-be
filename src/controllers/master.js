const MasterModel = require('../models/masterModel.js');

const getMasterSampul = async (req, res) => {
    try {
        const [data] = await MasterModel.getMasterSampul();

        res.status(200).json({
            message: 'GET all master success',
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
    getMasterSampul
}