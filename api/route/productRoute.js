const express = require("express");
const { getStockPrice, getProductsWithPricesHandler } = require("../handler/productHandler");

const router = express.Router();

router.get("/list", getProductsWithPricesHandler);

router.get("/:code", getStockPrice);

module.exports = router;
