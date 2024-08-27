const bookModel = require('../models/bookModel')

const mongoose = require('mongoose')

// Get all books existing in database
const getAllBooks = async (req, res) => {
    try {
        const books = await bookModel.find({}).sort({createdAt: -1});

        res.status(200).json(books)
    } catch (err) {
        res.status(400).json({msg: err.message})
    }
}

// Create new book
const createBook = async (req, res) => {
    if (!req.body) {
        res.status(400).json({msg: 'body Required!!!'})
    }
    try {
        const newBook = await bookModel.create({...req.body})

        res.status(200).json(newBook)
    }catch (err) {
        res.status(400).json({msg: err.message})
    }
}

// Delete a book
const deleteBook = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({msg: 'ID is not valid'})
    }
    try {
        const bookDelete = await bookModel.findByIdAndDelete(id);

        res.status(200).json({bookDelete, msg: 'Delete successfully'})
    }catch {
        res.status(400).json({msg: 'Can not delete book'})
    }
}

// Get one book based on its id:
const getOneBook = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({msg: 'ID is not existed'})
    }
    try {
        const bookFound = await bookModel.findById(id);

        res.status(200).json({bookFound, msg: 'Get book successfully'})
    } catch {
        res.status(400).json({msg: 'Can not find a book'})
    }
}

// Update a book
const updateBook = async (req, res) => {
    const {id} = req.params    
    // console.log(req.body)

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({msg: 'ID is not existed'})    
    }
    try {
        const bookUpdate = await bookModel.findByIdAndUpdate(id, req.body)

        res.status(200).json({msg: 'Update successfully'})
    }catch {
        res.status(400).json({msg: 'Can not update'})
    }
}
module.exports = {
    getAllBooks,
    createBook,
    deleteBook,
    getOneBook,
    updateBook
}