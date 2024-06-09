// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the login controller
const orderControllers = require("../controllers/order.controller");
// Create a route to handle the login request on post
router.post("/api/order", orderControllers.addOrder);
router.post("/api/getAllOrders", orderControllers.getAllOrders);
// Export the router
module.exports = router;
