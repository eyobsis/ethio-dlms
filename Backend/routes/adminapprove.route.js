//admin approve reject route
const express = require("express");
const router = express.Router();
const approvalController = require("../controllers/adminapprove.controller");

router.post("/api/approval/trainee/approve", approvalController.approveTrainee);
router.post("/api/approval/trainee/reject", approvalController.rejectTrainee);
router.post("/api/approval/renewal/approve", approvalController.approveRenewal);
router.post("/api/approval/renewal/reject", approvalController.rejectRenewal);

module.exports = router;
