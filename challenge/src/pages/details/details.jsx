import { useParams } from "react-router-dom";
import DetailNav from "../../components/detailnav";
import { useProductContext } from "/provider/Context";
import ProductDetails from "../../components/details";
import { useEffect, useState } from "react";
import GenerateMetadata from "./generateMetaData";

const Details = () => {
  const { fetchProductData } = useProductContext();
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  const [id] = productId.split("-");

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

    const intervalId = setInterval(fetchProduct, 5000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (product) {
      document.title = product.brand;

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.content = product.information;
      }
      const metaRobots = document.querySelector('meta[name="robots"]');
      if (metaRobots) {
        metaRobots.content = "index, follow";
      }

      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage && product.image) {
        ogImage.content = product.image;
      }
    }
  }, [product]);

  const productJsonLd = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.brand,
        description: product.information,
        image: product.image,
        offers: {
          "@type": "AggregateOffer",
          availability: product.availableForSale
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
          priceCurrency: "$",
          price: product.RetailPrice,
        },
      }
    : null;

  return (
    <div>
      {productJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productJsonLd),
          }}
        />
      )}
      <DetailNav />
      <ProductDetails product={product} />
      <GenerateMetadata product={product} />
    </div>
  );
};

export default Details;
