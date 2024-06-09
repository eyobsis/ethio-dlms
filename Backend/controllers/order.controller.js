// Import the order service
const orderService = require("../services/order.service");
// Create the add order controller
async function addOrder(req, res, next) {
    try {
        const orderData = req.body;
        // Create the order
        const order = await orderService.createOrder(orderData);
        if (!order) {
            res.status(400).json({
                error: "Failed to add the order!",
            });
        } else {
            res.status(200).json({
                status: "success",
                order: order,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Something went wrong!",
        });
    }
}

// Create the getAllOrders controller
async function getAllOrders(req, res, next) {
    try {
        // Call the getAllOrders method from the order service
        const orders = await orderService.getAllOrders();
        if (!orders) {
            res.status(400).json({
                error: "Failed to get all orders!",
            });
        } else {
            res.status(200).json({
                status: "success",
                orders: orders,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Something went wrong!",
        });
    }
}

// Export the controllers
module.exports = {
    addOrder,
    getAllOrders,
};
