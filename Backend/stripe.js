const express = require("express");
const Stripe = require("stripe");
require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY);
const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
    const cartItems = req.body.cartItems.map((item) => ({
        id: item.product_id,
        name: item.product_name,
        qty: item.quantity,
    }));

    const customer = await stripe.customers.create({
        metadata: {
            userId: req.body.userId,
            cart: JSON.stringify(cartItems),
        },
    });

    const line_items = req.body.cartItems.map((item) => ({
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
            allowed_countries: ["US", "CA", "ET"],
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

    res.send({ url: session.url });
});

// Create order function
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

    try {
        const savedOrder = await newOrder.save();
        console.log("Processed Order:", savedOrder);
    } catch (err) {
        console.log(err);
    }
};

// Stripe webhook
router.post(
    "/webhook",
    express.json({ type: "application/json" }),
    async (req, res) => {
        let data;
        let eventType;
        let webhookSecret;

        if (webhookSecret) {
            let event;
            let signature = req.headers["stripe-signature"];
            try {
                event = stripe.webhooks.constructEvent(
                    req.body,
                    signature,
                    webhookSecret
                );
            } catch (err) {
                console.log(
                    `⚠️  Webhook signature verification failed: ${err}`
                );
                return res.sendStatus(400);
            }
            data = event.data.object;
            eventType = event.type;
        } else {
            data = req.body.data.object;
            eventType = req.body.type;
        }

        if (eventType === "checkout.session.completed") {
            stripe.customers
                .retrieve(data.customer)
                .then(async (customer) => {
                    try {
                        createOrder(customer, data);
                    } catch (err) {
                        console.log(err);
                    }
                })
                .catch((err) => console.log(err.message));
        }

        res.status(200).end();
    }
);

module.exports = router;
