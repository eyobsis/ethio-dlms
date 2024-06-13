const pool = require('../config/db.config');

//get trainee id and renewal id based on user id






const getTraineeApprovals = async () => {
  const [rows] = await pool.query('SELECT * FROM trainee_approval_status');
  return rows;
};

const getRenewalApprovals = async () => {
  const [rows] = await pool.query('SELECT * FROM renewal_approval_status');
  return rows;
};

const approveTrainee = async (trainee_id, admin_comment) => {
  await pool.query(
    'INSERT INTO trainee_approval_status (trainee_id, status, admin_comment) VALUES (?, "approved", ?)',
    [trainee_id, admin_comment]
  );
};

const rejectTrainee = async (trainee_id, admin_comment) => {
  await pool.query(
    'INSERT INTO trainee_approval_status (trainee_id, status, admin_comment) VALUES (?, "rejected", ?)',
    [trainee_id, admin_comment]
  );
};

const approveRenewal = async (renewal_id, admin_comment) => {
  await pool.query(
    'INSERT INTO renewal_approval_status (renewal_id, status, admin_comment) VALUES (?, "approved", ?)',
    [renewal_id, admin_comment]
  );
};

const rejectRenewal = async (renewal_id, admin_comment) => {
  await pool.query(
    'INSERT INTO renewal_approval_status (renewal_id, status, admin_comment) VALUES (?, "rejected", ?)',
    [renewal_id, admin_comment]
  );
};

module.exports = {
  getTraineeApprovals,
  getRenewalApprovals,
  approveTrainee,
  rejectTrainee,
  approveRenewal,
  rejectRenewal
};
