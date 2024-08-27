const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {timeStamps: true})

// Mongoose added the ability to specify the collection name under the schema,
// or as the third argument when declaring the model
module.exports = mongoose.model('bookstore', bookSchema)