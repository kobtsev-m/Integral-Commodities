import styles from '../product-details.module.css';
import { nanoid } from 'nanoid';

function ProductDetailsItem(props) {
  const { field } = props;

  return (
    <li className={styles.productPage__feature} key={nanoid()}>
      {field.key}:{' '}
      <span className={styles.productPage__featureValue}>{field.value}</span>
    </li>
  );
}

export default ProductDetailsItem;
