// Import the dotenv package
require("dotenv").config();
// Import the jsonwebtoken package
const jwt = require("jsonwebtoken");
// A function to verify the token received from the frontend
// Import the user service
const userService = require("../services/user.service");
// A function to verify the token received from the frontend
const verifyToken = async (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({
            status: "fail",
            message: "No token provided!",
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                status: "fail",
                message: "Unauthorized!",
            });
        }
        console.log("Here is the decoded token");
        console.log(decoded);
        req.email = decoded.email;
        next();
    });
};

// A function to check if the user is an admin
const isAdmin = async (req, res, next) => {
    // let token = req.headers["x-access-token"];
    console.log(req.email);
    const email = req.email;
    const user = await userService.getUserByEmail(email);
    if (user[0].user_role_id === 2) {
        next();
    } else {
        return res.status(403).send({
            status: "fail",
            error: "Not an Admin!",
        });
    }
};

const authMiddleware = {
    verifyToken,
    isAdmin,
};

module.exports = authMiddleware;
