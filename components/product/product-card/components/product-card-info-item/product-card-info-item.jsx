import styles from '../../product-card.module.css';

function ProductCardInfoItem(props) {
  const { field } = props;

  return (
    <li className={styles.product__infoItem}>
      {field.key}:{' '}
      <span className={styles.product__infoValue}>{field.value}</span>
    </li>
  );
}

export default ProductCardInfoItem;
