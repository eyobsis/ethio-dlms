const express = require("express");
const registrationController = require("../controllers/license.controller");

const router = express.Router();

// Route for uploading a file
router.post("/api/newTrainee", registrationController.newTrainee);

// Route for getting all trainees
router.get("/api/getAllTrainees", registrationController.getTrainees);

// Route for getting a single trainee by ID
router.get("/api/getTraineeById/:id", registrationController.getTrainee);

// Route for updating a trainee by ID
router.put("/api/updateTrainee/:id", registrationController.updateTrainee);

// Route for deleting a trainee by ID
router.delete("/api/deleteTrainee/:id", registrationController.deleteTrainee);

//route t get new /api/renewLicense

router.post("/api/renewLicense", registrationController.renewLicense);
router.get("/api/getAllRenewals", registrationController.getAllRenewals);
router.get("/api/getRenewalById/:id", registrationController.getRenewalById);
router.put("/api/updateRenewal/:id", registrationController.updateRenewal);
router.delete("/api/deleteRenewal/:id", registrationController.deleteRenewal);


module.exports = router;
