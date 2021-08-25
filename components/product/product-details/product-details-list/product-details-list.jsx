import { nanoid } from 'nanoid';

import cn from 'classnames';
import styles from '../product-details.module.css';
import ProductDetailsItem from '../product-details-item/product-details-item';

function ProductDetailsList(props) {
  const { fields, fieldsToFilter } = props;

  function filterProductInfoFields(productInfo) {
    return productInfo.filter(
      (item) => item.value && !fieldsToFilter.includes(item.key.toLowerCase())
    );
  }

  const filteredProductInfo = filterProductInfoFields(fields);

  return (
    <div className={styles.productPage__featuresList}>
      {filteredProductInfo.map((item) => (
        <ProductDetailsItem key={nanoid()} field={item} />
      ))}
    </div>
  );
}

export default ProductDetailsList;
