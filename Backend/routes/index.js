// Import the express module
const path = require('path');
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the install router
const installRouter = require("./install.routes");
const imageRoutes = require("./image.routes");
// import get all users route

const getAllUsersRoute = require("./users.route");
// Import the login routes
const loginRoutes = require("./login.routes");
const orderRoutes = require("./order.routes");
const signupRoutes = require("./signup.routes");
const stripeRoutes = require("./stripe.routes");
// Add the stripe routes to the main router

router.use(imageRoutes);

router.use(getAllUsersRoute);
router.use(signupRoutes);

// Add the install router to the main router
router.use(installRouter);

// Add the login routes to the main router
router.use(loginRoutes);

router.use(orderRoutes);
router.use(stripeRoutes);

// Export the router
module.exports = router;
