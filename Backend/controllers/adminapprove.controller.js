const approvalService = require('../services/adminapprove.service');


const getTraineeApprovals = async (req, res) => {
  try {
    const approvals = await approvalService.getTraineeApprovals();
    res.json(approvals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getRenewalApprovals = async (req, res) => {
  try {
    const approvals = await approvalService.getRenewalApprovals();
    res.json(approvals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const approveTrainee = async (req, res) => {
  try {
    const { trainee_id, admin_comment } = req.body;
    await approvalService.approveTrainee(trainee_id, admin_comment);
    res.json({ message: 'Trainee approved' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const rejectTrainee = async (req, res) => {
  try {
    const { trainee_id, admin_comment } = req.body;
    await approvalService.rejectTrainee(trainee_id, admin_comment);
    res.json({ message: 'Trainee rejected' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const approveRenewal = async (req, res) => {
  try {
    const { renewal_id, admin_comment } = req.body;
    await approvalService.approveRenewal(renewal_id, admin_comment);
    res.json({ message: 'Renewal approved' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const rejectRenewal = async (req, res) => {
  try {
    const { renewal_id, admin_comment } = req.body;
    await approvalService.rejectRenewal(renewal_id, admin_comment);
    res.json({ message: 'Renewal rejected' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getTraineeApprovals,
  getRenewalApprovals,
  approveTrainee,
  rejectTrainee,
  approveRenewal,
  rejectRenewal
};