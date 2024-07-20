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
app.get("/", (req, res) => {
    const sql = "SELECT * FROM shelfbook_1"
    db.query(sql, (err, data) => {
        if (err) return res.json("Error");
        console.log(res.json(data))
        return res.json(data);
    })
})

app.listen(3000, () => {
    console.log("Listening localhost:3000")
})