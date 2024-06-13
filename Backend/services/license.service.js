const pool = require("../config/db.config");
// Fetch user_id based on email
const getUserIdByEmail = async (email) => {
  const rows = await pool.query("SELECT user_id FROM users WHERE email = ?", [
    email,
  ]);
  if (rows.length === 0) {
    return null;
  }
  return rows[0].user_id;
};

// Get all trainees
const getAllTrainees = async () => {
  const rows = await pool.query("SELECT * FROM driving_license_trainee");
  return rows;
};

// Get a trainee by ID
const getTraineeById = async (id) => {
  const [rows] = await pool.query(
    "SELECT * FROM driving_license_trainee WHERE trainee_id = ?",
    [id]
  );
  if (rows.length === 0) {
    return null;
  }
  return rows[0];
};

// Create a new trainee
const createTrainee = async (trainee) => {
  console.log("Inside createTrainee");
  console.log(trainee);
  const email = trainee.email;
  const dob = trainee.dob;
  const address = trainee.address;
  const vehicleType = trainee.vehicleType;
  console.log(dob);
  console.log(address);
  console.log(vehicleType);
  console.log(email);

  const userId = await getUserIdByEmail(email);
  console.log(userId);
  if (!userId) {
    throw new Error("User not found");
  }
  const result = await pool.query(
    "INSERT INTO driving_license_trainee (address, dob, vehicle_type, email, user_id, created_at) VALUES (?, ?, ?, ?, ?,?)",
    [address, dob, vehicleType, email, userId, new Date()]
  );
  const insertId = result.insertId;
  console.log(insertId);
  console.log(result);
  return result;
};

// Update a trainee
const updateTrainee = async (id, trainee) => {
  await pool.query(
    "UPDATE driving_license_trainee SET ? WHERE trainee_id = ?",
    [trainee, id]
  );
};

// Delete a trainee
const deleteTrainee = async (id) => {
  await pool.query("DELETE FROM driving_license_trainee WHERE trainee_id = ?", [
    id,
  ]);
};

async function renewLicense(renewalData) {
  try {
    console.log("Inside renewLicense");
    console.log(renewalData);
    const email = renewalData.email;
    const address = renewalData.address;
    const vehicle_type = renewalData.vehicleType;
    const expiry_date = renewalData.expirationDate;
    const license_number = renewalData.licenseNumber;
    const dob = renewalData.dob;
    const userId = await getUserIdByEmail(email);
    console.log(userId);
    if (!userId) {
      throw new Error("User not found");
    }

    const result = await pool.query(
      `INSERT INTO license_renewals (email, address, vehicle_type, expiry_date, license_number, dob, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [email, address, vehicle_type, expiry_date, license_number, dob, userId]
    );
    return result;
  } catch (error) {
    throw new Error(`Failed to create renewal: ${error.message}`);
  }
}

async function getRenewalById(renewalId) {
  try {
    const [result] = await pool.query(
      `SELECT renewal_id, email, address, vehicle_type, expiry_date, license_number, dob, created_at FROM license_renewals WHERE renewal_id = ?`,
      [renewalId]
    );
    return result[0];
  } catch (error) {
    throw new Error(`Failed to fetch renewal: ${error.message}`);
  }
}

async function updateRenewal(renewalId, renewalData) {
  try {
    const { email, address, vehicle_type, expiry_date, license_number, dob } =
      renewalData;
    const [result] = await pool.query(
      `UPDATE license_renewals SET email = ?, address = ?, vehicle_type = ?, expiry_date = ?, license_number = ?, dob = ? WHERE renewal_id = ?`,
      [
        email,
        address,
        vehicle_type,
        expiry_date,
        license_number,
        dob,
        renewalId,
      ]
    );
    return result.affectedRows > 0;
  } catch (error) {
    throw new Error(`Failed to update renewal: ${error.message}`);
  }
}

async function deleteRenewal(renewalId) {
  try {
    const [result] = await pool.query(
      `DELETE FROM license_renewals WHERE renewal_id = ?`,
      [renewalId]
    );
    return result.affectedRows > 0;
  } catch (error) {
    throw new Error(`Failed to delete renewal: ${error.message}`);
  }
}

async function getAllRenewals() {
  try {
    const results = await pool.query(
      `SELECT renewal_id, email, address, vehicle_type, expiry_date, license_number, dob, created_at FROM license_renewals`
    );
    return results;
  } catch (error) {
    throw new Error(`Failed to fetch renewals: ${error.message}`);
  }
}

module.exports = {
  getAllTrainees,
  getTraineeById,
  createTrainee,
  updateTrainee,
  deleteTrainee,
  getUserIdByEmail,
  renewLicense,
  getRenewalById,
  updateRenewal,
  deleteRenewal,
  getAllRenewals,
};
