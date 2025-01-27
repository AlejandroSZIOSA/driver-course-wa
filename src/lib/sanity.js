// lib/stripe.js
/* import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function createCheckoutSession(items) {
  return await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: items,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/cancel`,
  });
} */

/* External API Integrations
	•	Functions for handling external services like Stripe, Firebase, or AWS. */
