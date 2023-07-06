const mongoose = require('mongoose');




// Book schema and model
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  description: String,
  price: Number,
});

const Book = mongoose.model('Book', bookSchema);

module.exports={
	Book
}