/* eslint-disable max-len */
/* eslint-disable no-unexpected-multiline */
/* eslint-disable func-call-spacing */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_TEST_KEY);
// eslint-disable-next-line max-len, no-unexpected-multiline

require("dotenv").config();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// API
// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
// app.use(cors());
app.use(express.json());


// API routes
app.get("/", (request, response) => response.status(200).send
("hello world"));
// eslint-disable-next-line space-before-function-paren
// changed 'query' to body
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received >>>", total);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
    // ok - created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    response.status(500).send({error: error.message});
  }
});
// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/clone-bfd8a/us-central1/api

// http://127.0.0.1:5001/clone-bfd8a/us-central1/api
