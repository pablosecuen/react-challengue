/* eslint-disable react/prop-types */
const GenerateMetadata = ({ product }) => {
  if (!product) {
    return (
      <>
        <title>Not Found</title>
        <meta name="description" content="The product could not be found." />
      </>
    );
  }

  const { url } = product.image || {};
  const indexable = !product.brand;

  return (
    <>
      <title>{product.brand || product.information}</title>
      <meta name="description" content={product.information || product.origin} />
      <meta name="robots" content={`index=${indexable}, follow=${indexable}`} />
      <meta name="googleBot" content={`index=${indexable}, follow=${indexable}`} />
      {url && <meta property="og:image" content={url} />}
    </>
  );
};

export default GenerateMetadata;
