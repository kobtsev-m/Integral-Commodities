import styles from '../../product-card.module.css';

function ProductCardTitle(props) {
  const { children } = props;
  return (
    <h3 className={styles.product__title}>
      Grade: <span className={styles.product__titleValue}>{children}</span>
    </h3>
  );
}

export default ProductCardTitle;
