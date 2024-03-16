import { useProductContext } from "/provider/Context";
import { useEffect, useState } from "react";
import UserDisplay from "../../components/user-display/index";
import SearchBar from "../../components/searchbar/index";
import Categories from "../../components/categories/index";
import "./shop.css";
import Navbar from "../../components/navbar";
import AllProducts from "../../components/all-products";


function Shop() {
  const { products } = useProductContext();
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProductsByBrand = (brand) => {
    const filtered = products.filter((product) =>
      product.brand.toLowerCase().includes(brand.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
    }
  }, [products]);

  return (
    <div className="appcontainer">
      <Navbar />
      <UserDisplay />
      <SearchBar onSearch={filterProductsByBrand} />
      <Categories />
      <AllProducts products={filteredProducts} />
    </div>
  );
}

export default Shop;
