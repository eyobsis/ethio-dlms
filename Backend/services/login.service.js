// Import the bcrypt module to do the password comparison
const bcrypt = require("bcryptjs");
// Import the user service to get user by email
const userService = require("./user.service");

// Handle user login
async function logIn(userData) {
    try {
        // Retrieve user data from the database
        const user = await userService.getUserByEmail(userData.email);

        // Check if user exists
        if (!user) {
            return {
                status: "fail",
                message: "User does not exist",
            };
        }

        // Compare the provided password with the stored hashed password
        const passwordMatch = await bcrypt.compare(
            userData.password,
            user.password
        );

        // Log the comparison result and passwords for debugging
        console.log("Password Match:", passwordMatch);
        console.log("Provided Password:", userData.password);
        console.log("Stored Hashed Password:", user.password);

        // Check if the password matches
        if (!passwordMatch) {
            return {
                status: "fail",
                message: "Incorrect password",
            };
        }

        // Return success if user is authenticated
        return {
            status: "success",
            data: user,
        };
    } catch (error) {
        // Log any errors that occur during login
        console.error("Error during login:", error);
        return {
            status: "error",
            message: "An error occurred during login",
        };
    }
}

// Export the function
module.exports = {
    logIn,
};
