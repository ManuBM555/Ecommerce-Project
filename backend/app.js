const express = require("express");
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")
const dotenv = require("dotenv")


// config
dotenv.config({ path: "backend/config/config.env" })



const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(fileUpload())

// Route Imports
const product = require("./Routes/productRoute");
const user = require("./Routes/userRoute");
const order = require("./Routes/orderRoute");
const payment = require("./Routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1",user);
app.use("/api/v1",order);
app.use("/api/v1",payment);

// Middleware for Errors
app.use(errorMiddleware);


module.exports = app;