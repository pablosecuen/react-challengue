import { useParams } from "react-router-dom";
import DetailNav from "../../components/detailnav";
import { useProductContext } from "/provider/Context";
import ProductDetails from "../../components/details";
const Details = () => {
  const { products } = useProductContext();
  const { productId } = useParams();
  const [id] = productId.split("-");

  // Filtrar el producto por su ID
  const product = products.find((product) => product.id === parseInt(id));

  console.log(product);

  return (
    <div>
      <DetailNav />
      <ProductDetails product={product} />
    </div>
  );
};

export default Details;
