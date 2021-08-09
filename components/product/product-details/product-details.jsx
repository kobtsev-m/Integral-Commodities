import router from 'next/router';
import Trans from 'next-translate/Trans';
import ProductDetailsList from './product-details-list/product-details-list';
import styles from './product-details.module.css';

function ProductDetails(props) {
  const { product, fieldsToFilter } = props;
  const { grade, prod_data: prodData } = product;
  const category = router.query.categoryName;
  return (
    <>
      <h1 className={styles.productPage__title}>
        {['fertilizers', 'sulphur'].includes(category) ? (
          <Trans i18nKey={`common:${category}.${grade.toLowerCase()}`} />
        ) : (
          grade
        )}
      </h1>
      <ProductDetailsList fields={prodData} fieldsToFilter={fieldsToFilter} />
    </>
  );
}

export default ProductDetails;
