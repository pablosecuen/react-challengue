const express = require("express");
const cors = require("cors");
const stockPriceRoute = require("./route/productRoute");
const paymentRoute = require("./route/paymentsRoute");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use(morgan("dev"));

app.use("/api/stock-price", stockPriceRoute);

app.use("/api/payments", paymentRoute);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
