import ProductDetailsItem from './ProductDetailsItem';
import styles from './ProductDetails.module.css';

function ProductDetails(props) {
  const { product, fieldsToFilter } = props;
  const { grade, prod_data: prodData } = product;

  function filterProductInfoFields(productInfo) {
    return productInfo.filter(
      (item) => item.value && !fieldsToFilter.includes(item.key.toLowerCase())
    );
  }

  const filteredProductInfo = filterProductInfoFields(prodData);

  return (
    <>
      <h1 className={styles.productPage__title}>{grade}</h1>
      <div className={styles.productPage__featuresList}>
        {filteredProductInfo.map((item, i) => (
          <ProductDetailsItem key={i} field={item} />
        ))}
      </div>
    </>
  );
}

export default ProductDetails;
