const checkstatus = require("../services/checkstatus.service");

const getTraineeStatus = async (req, res) => {
  console.log(req.body);
  try {
    console.log("getTraineeStatus");
    console.log(req.body.userId);
    const user_id = req.body.userId;
    const status = await checkstatus.getTraineeApprovals(user_id);
    res.json(status);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getRenewalStatus = async (req, res) => {
  try {
    const user_id = req.body.userId;
    const status = await checkstatus.getRenewalApprovals(user_id);
    res.json(status);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getTraineeStatus,
  getRenewalStatus,
};
