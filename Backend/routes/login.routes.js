// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the login controller
const loginControllers = require("../controllers/login.controller");
// Route for normal users
router.post("/api/login", loginControllers.logIn);

// Export the router
module.exports = router;
