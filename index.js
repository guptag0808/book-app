// app.js

const express = require('express');
const {connection}= require("./db");
const bodyParser = require('body-parser');

const {bookeRouter} =require("./routes/bookeRouter")

const app = express();


// Middleware
app.use(express.json());
app.use("/",bookeRouter)



// Start the serve
app.listen(4500, async() => {
	try{
		await connection
		console.log('Server listening on port connected to db')
	}catch(err){
		console.log(err.message,'Failed to start server')
	}
  
});
