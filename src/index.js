const express = require('express');
const usersRoutes = require('./routes/gereja');
const transactionRoutes = require('./routes/transaction');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());


// routes
app.use('/gereja', usersRoutes);
app.use('/transaction', transactionRoutes);


app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})
app.listen(4000,()=> {
    console.log("running on port 4000");
})