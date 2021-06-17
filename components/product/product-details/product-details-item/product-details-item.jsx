import { nanoid } from "nanoid";

import cn from "classnames";
import styles from "../product-details.module.css";

function ProductDetailsItem(props) {
  const { field } = props;
  return (
    <div className={styles.productPage__feature}>
      {field.key}:{" "}
      <span className={styles.productPage__featureValue}>{field.value}</span>
    </div>
  );
}

export default ProductDetailsItem;
