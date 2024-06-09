const stripeService = require("../services/stripe.service");

const createCheckoutSession = async (req, res) => {
    try {
        const session = await stripeService.createCheckoutSession(req.body);
        res.send({ url: session.url });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

const handleWebhook = async (req, res) => {
    try {
        await stripeService.handleWebhook(req);
        res.status(200).end();
    } catch (err) {
        res.status(400).send(`Webhook Error: ${err.message}`);
    }
};

module.exports = {
    createCheckoutSession,
    handleWebhook,
};
