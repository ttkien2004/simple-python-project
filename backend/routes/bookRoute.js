const express = require('express')
const { getAllBooks, deleteBook, createBook, getOneBook, updateBook } = require('../controllers/bookController')
const router = express.Router()



// Get all
router.get('/getAll', getAllBooks)
// Get one
router.get('/getOne/:id', getOneBook)
// CREATE NEW BOOK
router.post('/create', createBook)
// DELETE A BOOK
router.delete('/delete/:id', deleteBook)
// UPDATE A BOOK
router.patch('/update/:id', updateBook)

module.exports = router