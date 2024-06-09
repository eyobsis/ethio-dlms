// Import the login service
const loginService = require("../services/login.service");
// Import the jsonwebtoken module
const jwt = require("jsonwebtoken");
// Import the secret key from the environment variables
const jwtSecret = process.env.JWT_SECRET;
// Handle user login
async function logIn(req, res) {
    try {

        console.log(req.body);
        const userData = req.body;
        
        // Call the logIn method from the login service
        const user = await loginService.logIn(userData);
        // console.log("usersssssssssssssssssssssssssssssss");

        console.log(user);

        // If the user is not found
        if (user.status === "fail") {
            return res.status(403).json({
                status: user.status,
                message: user.message,
            });
        }

        // If successful, send a response to the client
        const payload = { user };

        console.log("payload is==============", payload);
        const token = jwt.sign(payload, jwtSecret, {
            expiresIn: "24h",
        });

        const sendBack = {
            user_token: token,
            user:user,
        };
        

        return res.status(200).json({
            status: "success",
            message: "user logged in successfully",
            data: sendBack,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "error",
            message: "An error occurred during login",
        });
    }
}

// Export the functions
module.exports = {
    logIn,
};
