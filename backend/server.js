require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoute')

const app = express()

// middle ware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use(cors())
// routes
app.use('/api/bookStore', bookRoutes)
// connect to database
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Listening to PORT ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log(err)
})
