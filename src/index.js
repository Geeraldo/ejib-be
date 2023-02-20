const express = require('express');
const usersRoutes = require('./routes/gereja');
const app = express();
app.use(express.json());


// routes
app.use('/gereja', usersRoutes);


app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})
app.listen(4000,()=> {
    console.log("running on port 4000");
})