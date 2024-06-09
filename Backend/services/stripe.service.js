const Stripe = require("stripe");
const Order = require("../models/Order");
require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY);

const createCheckoutSession = async (data) => {
    const cartItems = data.cartItems.map((item) => ({
        id: item.product_id,
        name: item.product_name,
        qty: item.quantity,
    }));

    const customer = await stripe.customers.create({
        metadata: {
            userId: data.userId,
            cart: JSON.stringify(cartItems),
        },
    });

    const line_items = data.cartItems.map((item) => ({
        price_data: {
            currency: "usd",
            product_data: {
                name: item.product_name,
                images: [item.image_url],
                description: item.description,
                metadata: {
                    id: item.product_id,
                },
            },
            unit_amount: item.price * 100,
        },
        quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_address_collection: {
            allowed_countries: ["US","ET"],
        },
        shipping_options: [
            {
                shipping_rate_data: {
                    type: "fixed_amount",
                    fixed_amount: {
                        amount: 0,
                        currency: "usd",
                    },
                    display_name: "Free shipping",
                    delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 5,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 7,
                        },
                    },
                },
            },
            {
                shipping_rate_data: {
                    type: "fixed_amount",
                    fixed_amount: {
                        amount: 1500,
                        currency: "usd",
                    },
                    display_name: "Next day air",
                    delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 1,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 1,
                        },
                    },
                },
            },
        ],
        phone_number_collection: {
            enabled: true,
        },
        line_items,
        mode: "payment",
        customer: customer.id,
        success_url: `${process.env.CLIENT_URL}/checkout-success`,
        cancel_url: `${process.env.CLIENT_URL}/cart`,
    });

    return session;
};

const createOrder = async (customer, data) => {
    const items = JSON.parse(customer.metadata.cart);

    const products = items.map((item) => ({
        productId: item.product_id,
        quantity: item.qty,
    }));

    const newOrder = new Order({
        userId: customer.metadata.userId,
        customerId: data.customer,
        paymentIntentId: data.payment_intent,
        products,
        subtotal: data.amount_subtotal,
        total: data.amount_total,
        shipping: data.customer_details,
        payment_status: data.payment_status,
    });

    console.log(`order is ${newOrder}`)

    try {
        const savedOrder = await newOrder.save();
        console.log("Processed Order:", savedOrder);
    } catch (err) {
        console.log(err);
    }
};

const handleWebhook = async (req) => {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    let data;
    let eventType;

    if (webhookSecret) {
        let event;
        const signature = req.headers["stripe-signature"];
        try {
            event = stripe.webhooks.constructEvent(
                req.body,
                signature,
                webhookSecret
            );
        } catch (err) {
            throw new Error(
                `Webhook signature verification failed: ${err.message}`
            );
        }
        data = event.data.object;
        eventType = event.type;
    } else {
        data = req.body.data.object;
        eventType = req.body.type;
    }

    if (eventType === "checkout.session.completed") {
        const customer = await stripe.customers.retrieve(data.customer);
        await createOrder(customer, data);
    }
};

module.exports = {
    createCheckoutSession,
    handleWebhook,
};
