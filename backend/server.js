const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

app.get("/", (req,res) => {
    const sql = "SELECT * FROM student_details"
    db.query(sql, (err, data) => {
        if (err) return res.json("Error")
        return res.json(data)
    })
})
// Create new student
app.post("/create", (req, res) => {
    const sql = "INSERT INTO student_details (`ID`, `name`, `sex`, `faculty`) VALUES(?)"
    const values = [
        req.body.id,
        req.body.name,
        req.body.gender,
        req.body.faculty
    ]            
    db.query(sql, [values], (err, data) => {
        if (err) return res.json("Error")
        return res.json(data)
    })
})
// Update information of student
app.put("/update/:userID", (req, res) => {
    const sql = "UPDATE student_details SET name = ?, sex = ?, faculty = ? WHERE ID = ?"
    console.log(req.body.name)
    const values = [        
        req.body.name,
        req.body.gender,
        req.body.faculty
    ]            
    // Get the id
    const id = req.params.userID
    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            console.log(values)
            return res.json("Error")
        }            
        return res.json(data)
    })
})
// Delete student
app.delete("/student/:userID", (req, res) => {
    const sql = "DELETE FROM student_details WHERE ID = ?"        
    // Get the id
    const id = req.params.userID
    db.query(sql, [id], (err, data) => {
        if (err) {            
            return res.json("Error")
        }            
        return res.json(data)
    })
})
app.listen(3000, () => {
    console.log("Listening Localhost:3000")
})