// Import the express module 
const express = require('express');
//const mongoose = require("mongoose");
// const stripe = require("./stripe");
// Import the dotenv module and call the config method to load the environment variables
require('dotenv').config();
const uri = process.env.DB_URI;
// Import the sanitizer module 
const sanitize = require('sanitize');
// Import the CORS module 
const cors = require('cors');

// Create the webserver 
const app = express();


// Add the CORS middleware
app.use(cors());
// Set up the CORS options to allow requests from our front-end 

// Create a variable to hold our port number 
const port = process.env.PORT;
// Import the router 
const router = require('./routes');




// Add the express.json middleware to the application
app.use(express.json());
// Add the sanitizer to the express middleware 

//app.use("/api/stripe", stripe);
app.use(sanitize.middleware);
// Add the routes to the application as middleware 
app.use(router);
// Start the webserver
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
app.get('/',
(req,res) => {
  res.status(200).json({
    status: "success",
    data: "conected",
  });
}



)
// Export the webserver for use in the application 
module.exports = app;

/*mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));*/