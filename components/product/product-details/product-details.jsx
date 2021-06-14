import styles from "./product-details.module.css";
import ProductDetailsList from "./product-details-list/product-details-list";

function ProductDetails(props) {
  const { product, fieldsToFilter } = props;
  const { grade, prod_data: prodData } = product;
  return (
    <>
      <h1 className={styles.productPage__title}>{grade}</h1>
      <ProductDetailsList fields={prodData} fieldsToFilter={fieldsToFilter} />
    </>
  );
}

export default ProductDetails;
