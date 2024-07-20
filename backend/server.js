const express = require('express');
const cors = require('cors')
const mysql = require('mysql')
const app = express()

app.use(cors())
app.use(express.json())

// Connect to mysql database: 
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shopping_book"
})

// Get information of books
app.get("/all", (req, res) => {
    const sql = "SELECT * FROM shelfbook_1"
    db.query(sql, (err, data) => {
        if (err) return res.json("Error");        
        return res.json(data);
    })
})
app.get("/BestSeller", (req, res) => {
    const sql = "SELECT * FROM shelfbook_2"
    db.query(sql, (err, data) => {
        if (err) return res.json("Error")
            return res.json(data)
    })
})
app.get("/Fantasy", (req, res) => {
    const sql = "SELECT * FROM shelfbook_3"
    db.query(sql, (err, data) => {
        if (err) return res.json("Error")
        return res.json(data)
    })
})

app.listen(3000, () => {
    console.log("Listening localhost:3000")
})