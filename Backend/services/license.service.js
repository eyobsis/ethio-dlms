const pool = require("../config/db.config");
// Fetch user_id based on email
const getUserIdByEmail = async (email) => {
  const [rows] = await pool.query("SELECT user_id FROM users WHERE email = ?", [
    email,
  ]);
  if (rows.length === 0) {
    return null;
  }
  return rows[0].user_id;
};

// Get all trainees
const getAllTrainees = async () => {
  const [rows] = await pool.query("SELECT * FROM driving_license_trainee");
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
  const userId = await getUserIdByEmail(trainee.email);
  if (!userId) {
    throw new Error("User not found");
  }
  const [result] = await pool.query(
    "INSERT INTO driving_license_trainee (address, dob, vehicleType, email, user_id) VALUES (?, ?, ?, ?, ?)",
    [trainee.address, trainee.dob, trainee.vehicleType, trainee.email, userId]
  );
  const insertId = result.insertId;
  return { trainee_id: insertId, ...trainee, user_id: userId };
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

module.exports = {
  getAllTrainees,
  getTraineeById,
  createTrainee,
  updateTrainee,
  deleteTrainee,
  getUserIdByEmail,
};
