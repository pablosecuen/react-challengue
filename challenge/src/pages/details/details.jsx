import { useParams } from "react-router-dom";
import DetailNav from "../../components/detailnav";
import { useProductContext } from "/provider/Context";
import ProductDetails from "../../components/details";
import { useEffect, useState } from "react";
const Details = () => {
  const { fetchProductData } = useProductContext();
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  const [id] = productId.split("-");

  // Filtrar el producto por su ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productDetails = await fetchProductData(id);
        setProduct(productDetails);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <DetailNav />
      <ProductDetails product={product} />
    </div>
  );
};

export default Details;
