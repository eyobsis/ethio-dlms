const conn = require("../config/db.config");




// Create the createOrder service
async function createOrder(orderData) {
  try {
    const { customer_id, total_amount, status, order_items } = orderData;

    // Start a transaction
    await db.begin();

    // Insert the order into the orders table
    const order = await db.query(
      `INSERT INTO orders (customer_id, total_amount, status) VALUES ($1, $2, $3) RETURNING *`,
      [customer_id, total_amount, status]
    );

    // Insert the order items into the order_items table
    for (let item of order_items) {
      await db.query(
        `INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4)`,
        [order.order_id, item.product_id, item.quantity, item.price]
      );
    }

    // Commit the transaction
    await db.commit();

    return order;
  } catch (error) {
    // Rollback the transaction in case of error
    await db.rollback();
    console.log(error);
    return null;
  }
}

// Create the getAllOrders service
async function getAllOrders() {
  try {
    // Get all orders and their items from the database
    const orders = await db.query(
      `SELECT orders.*, order_items.product_id, order_items.quantity, order_items.price
       FROM orders
       JOIN order_items ON orders.order_id = order_items.order_id`
    );

    return orders;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Export the services
module.exports = {
  createOrder,
  getAllOrders
};