const stockPriceData = require("../data/stock-price").default;
const productsData = require("../data/products").default;

const getStockPriceByCode = (code) => {
  const product = productsData.find((product) => product.id === parseInt(code));

  if (!product) {
    throw new Error("Product not found");
  }

  const concatenatedSkus = product.skus.map((sku) => {
    const stockPrice = stockPriceData[sku.code];
    const priceInDollars = parseFloat((stockPrice.price / 100).toFixed(2));
    return { ...sku, ...stockPrice, price: priceInDollars };
  });

  return {
    ...product,
    skus: concatenatedSkus,
  };
};

const getConcatenatedProducts = () => {
  const concatenatedProducts = productsData.map((product) => {
    const unifiedSkus = product.skus.map((sku) => {
      const stockPrice = stockPriceData[sku.code];
      return { ...sku, ...stockPrice };
    });
    return { ...product, skus: unifiedSkus };
  });
  return concatenatedProducts;
};

module.exports = { getStockPriceByCode, getConcatenatedProducts };
