// Import the mysql2 module Promise
const mysql = require("mysql2/promise");
// Prepare connection parameters we use to connect to the database
const dbConfig = {
    //socketPath: process.env.DB_SOCKET_PATH,
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
};
// Create the connection pool
const pool = mysql.createPool(dbConfig);
// Prepare a function that will execute the SQL queries asynchronously
async function query(sql, params) {
    const [rows, fields] = await pool.execute(sql, params);
    return rows;
}

// Export the query function for use in the application
module.exports = { query };
