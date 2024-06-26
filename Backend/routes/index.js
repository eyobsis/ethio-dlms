// Import the express module
const path = require('path');
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the install router
const installRouter = require("./install.routes");
const imageRoutes = require("./image.routes");
const adminapproveRoutes = require("./adminapprove.route");
const checkstatusRoutes = require("./checkstatus.route");

// import get all users route

const getAllUsersRoute = require("./users.route");
// Import the login routes

const loginRoutes = require("./login.routes");
const orderRoutes = require("./order.routes");
const signupRoutes = require("./signup.routes");
const stripeRoutes = require("./stripe.routes");
const fileRoutes = require("./file.routes");
const licenseRoutes = require("./license.route");
// Add the stripe routes to the main router
router.use(checkstatusRoutes);
router.use(adminapproveRoutes);
router.use(licenseRoutes);
router.use(fileRoutes);
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
