const express = require("express");
const stripeController = require("../controllers/stripe.controller");

const router = express.Router();

router.post("/api/stripe/create-checkout-session",stripeController.createCheckoutSession);
router.post("/webhook",express.json({ type: "application/json" }),stripeController.handleWebhook);

module.exports = router;
