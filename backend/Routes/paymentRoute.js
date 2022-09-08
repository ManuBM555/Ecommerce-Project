const express = require("express")
const router = express.Router()
const {isAuthenticatedUser} = require("../Middleware/auth")
const {processPayment, sendStripeApiKey} = require("../Controllers/paymentController")

router.route("/process/payment").post(isAuthenticatedUser, processPayment)

router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey)

module.exports = router