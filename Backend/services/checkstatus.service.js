const pool = require("../config/db.config");

const getTraineeApprovals = async (user_id) => {
  try {
    console.log("User ID:", user_id);

    // Fetch trainee_id based on user_id
    const traineeIdQuery =
      "SELECT trainee_id FROM driving_license_trainee WHERE user_id = ?";
    const traineeIdResult = await pool.query(traineeIdQuery, [user_id]);
    const trainee_id = traineeIdResult[0].trainee_id;

    console.log("Trainee ID:", trainee_id);

    // Fetch trainee approval status using trainee_id
    const traineeApprovalQuery =
      "SELECT * FROM trainee_approval_status WHERE trainee_id = ?";
    const [traineeApprovalRows] = await pool.query(traineeApprovalQuery, [
      trainee_id,
    ]);

    console.log("Trainee Approval Rows:", traineeApprovalRows);

    return traineeApprovalRows;
  } catch (error) {
    console.error("Error in getTraineeApprovals:", error);
    throw error; // Throw the error to handle it further up the call stack
  }
};

const getRenewalApprovals = async (user_id) => {
  try {
    // Fetch renewal_id based on user_id
    const renewalIdQuery =
      "SELECT renewal_id FROM license_renewals WHERE user_id = ?";
    const renewalIdResult = await pool.query(renewalIdQuery, [user_id]);
    const renewal_id = renewalIdResult[0].renewal_id;

    console.log("Renewal ID:", renewal_id);

    // Fetch renewal approval status using renewal_id
    const renewalApprovalQuery =
      "SELECT * FROM renewal_approval_status WHERE renewal_id = ?";
    const renewalApprovalRows = await pool.query(renewalApprovalQuery, [
      renewal_id,
    ]);

    console.log("Renewal Approval Rows:", renewalApprovalRows);

    return renewalApprovalRows;
  } catch (error) {
    console.error("Error in getRenewalApprovals:", error);
    throw error; // Throw the error to handle it further up the call stack
  }
};

module.exports = {
  getTraineeApprovals,
  getRenewalApprovals,
};
