const { getStockPriceByCode, getConcatenatedProducts } = require("../controller/productController");

const getStockPrice = (req, res) => {
  try {
    const { code } = req.params;
    const stockPrice = getStockPriceByCode(code);
    res.json(stockPrice);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getProductsWithPricesHandler = (req, res) => {
  try {
    const concatenatedProducts = getConcatenatedProducts();
    res.status(200).json(concatenatedProducts);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getStockPrice, getProductsWithPricesHandler };
