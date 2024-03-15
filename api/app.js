const express = require("express");
const cors = require("cors");
const stockPriceRoute = require("./route/productRoute");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(morgan("dev"));

app.use("/api/stock-price", stockPriceRoute);

app.use("/api/payments", stockPriceRoute);

app.listen(PORT, () => {
  console.log(`Server is running on https://react-challengue-production.up.railway.app
`);
});
