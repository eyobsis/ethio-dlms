// Import the User service
const UserService = require("../services/user.service");

// Create the add User controller
async function createUser(req, res) {
    console.log(req.body);

    try {
        // Check if User email already exists in the database
        const UserExists = await UserService.checkIfUserExists(req.body.email);

        // If User exists, send a response to the client
        if (UserExists) {
            res.status(400).json({
                error: "This email address is already associated with another User!",
            });
        } else {
            const UserData = req.body;
            console.log(UserData);

            // Create the User
            const User = await UserService.createUser(UserData);

            if (!User) {
                res.status(400).json({
                    error: "Failed to add the User!",
                });
            } else {
                res.status(200).json({
                    status: "true",
                    data: User,
                });
            }
        }
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(400).json({
            error: "Something went wrong!",
        });
    }
}

// Create the getAllUsers controller
async function getAllUsers(req, res, next) {
    try {
        // Call the getAllUsers method from the User service
        const Users = await UserService.getAllUsers();

        if (!Users) {
            res.status(400).json({
                error: "Failed to get all Users!",
            });
        } else {
            res.status(200).json({
                status: "success",
                data: Users,
            });
            console.log(`from get all users${Users}`);
        }
    } catch (error) {
        console.error("Error getting all users:", error);
        res.status(400).json({
            error: "Something went wrong!",
        });
    }
}
// Export the createUser controller
module.exports = {
    createUser,
    getAllUsers,
};
