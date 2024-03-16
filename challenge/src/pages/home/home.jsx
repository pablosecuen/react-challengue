import Categories from "/src/components/categories/index";
import Navbar from "/src/components/navbar/index";
import Popular from "/src/components/popular/index";
import SearchBar from "/src/components/searchbar/index";
import UserDisplay from "/src/components/user-display/index";
import { useProductContext } from "/provider/Context";
import { useEffect, useState } from "react";

import "./home.css";

function Home() {
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
      <Popular products={filteredProducts} />
    </div>
  );
}

export default Home;
