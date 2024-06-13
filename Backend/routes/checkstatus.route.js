//route for checking approval reject status by user id

//admin approve reject route
const express = require("express");
const router = express.Router();
const approvalController = require("../controllers/checkstatus.controller");

router.post("/api/trainee/status", approvalController.getTraineeStatus);

router.post("/api/renewal/status", approvalController.getRenewalStatus);

module.exports = router;
