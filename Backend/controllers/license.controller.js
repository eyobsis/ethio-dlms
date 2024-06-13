//license registration and rebewal controller
const licenseService = require("../services/license.service");
const getTrainees = async (req, res) => {
  try {
    const trainees = await licenseService.getAllTrainees();
    res.json(trainees);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getTrainee = async (req, res) => {
  try {
    const trainee = await licenseService.getTraineeById(Number(req.params.id));
    if (!trainee) {
      res.status(404).json({ message: "Trainee not found" });
      return;
    }
    res.json(trainee);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const newTrainee = async (req, res) => {
  try {
    console.log(req.body);
    const trainee = req.body;
    const newTrainee = await licenseService.createTrainee(trainee);
    console.log(`====== ${trainee}`);
    res.status(201).json(newTrainee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTrainee = async (req, res) => {
  try {
    await licenseService.updateTrainee(Number(req.params.id), req.body);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteTrainee = async (req, res) => {
  try {
    await licenseService.deleteTrainee(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const renewLicense = async (req, res) => {
  try {
    const renewalData = req.body;
    console.log(renewalData);
    const newRenewal = await licenseService.renewLicense(renewalData);
    res.status(201).json(newRenewal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllRenewals = async (req, res) => {
  try {
    const renewals = await licenseService.getAllRenewals();
    res.json(renewals);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const getRenewalById = async (req, res) => {
  try {
    const renewal = await licenseService.getRenewalById(Number(req.params.id));
    if (!renewal) {
      res.status(404).json({ message: "Renewal not found" });
      return;
    }
    res.json(renewal);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const updateRenewal = async (req, res) => {
  try {
    await licenseService.updateRenewal(Number(req.params.id), req.body);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteRenewal = async (req, res) => {
  try {
    await licenseService.deleteRenewal(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getTrainees,
  getTrainee,
  newTrainee,
  updateTrainee,
  deleteTrainee,
  renewLicense,
  getAllRenewals,
  getRenewalById,
  updateRenewal,
  deleteRenewal,
};
