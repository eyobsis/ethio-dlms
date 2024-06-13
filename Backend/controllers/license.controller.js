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
    const newTrainee = await licenseService.createTrainee(req.body);
    console.log(req.body);
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

module.exports = {
  getTrainees,
  getTrainee,
  newTrainee,
  updateTrainee,
  deleteTrainee,
};
