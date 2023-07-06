const express= require('express')
const {Book}= require("../model/bookModel")
const bookeRouter= express.Router()



bookeRouter.post('/api/books', async (req, res) => {
	console.log(req.body)
	try {
		
	  const { title, author, genre, description, price } = req.body;
  
	  const newBook = new Book({
		title,
		author,
		genre,
		description,
		price,
	  });
  
	  await newBook.save();
	  res.status(201).json(newBook);
	} catch (error) {
	  console.error('Error adding book', error);
	  res.status(500).json({ error: 'Failed to add book' });
	}
  });
  
  // Retrieve Books API
  bookeRouter.get('/api/books', async (req, res) => {
     console.log(req.body)
	try {
	  const books = await Book.find();
	  res.json(books );
	} catch (error) {
	  console.error('Error retrieving books', error);
	  res.status(500).json({ error: 'Failed to retrieve books' });
   }
  });
  
  // Delete Book API
  bookeRouter.delete('/api/books/:id', async (req, res) => {
	try {
	  const bookId = req.params.id;
  
	  await Book.findByIdAndDelete(bookId);
	  res.sendStatus(204);
	} catch (error) {
	  console.error('Error deleting book', error);
	  res.status(500).json({ error: 'Failed to delete book' });
	}
  });
  
  // Filter Books API
  bookeRouter.get('/api/books/filter', async (req, res) => {
	try {
	  const genre = req.query.genre;
  
	  const books = await Book.find({ genre });
	  res.json(books);
	} catch (error) {
	  console.error('Error filtering books', error);
	  res.status(500).json({ error: 'Failed to filter books' });
	}
  });
  
  // Sort Books API
  bookeRouter.get('/api/books/sort', async (req, res) => {
	try {
	  const sortBy = req.query.sortBy;
  
	  const books = await Book.find().sort({ price: sortBy });
	  res.json(books);
	} catch (error) {
	  console.error('Error sorting books', error);
	  res.status(500).json({ error: 'Failed to sort books' });
	}
  });

  module.exports={bookeRouter}