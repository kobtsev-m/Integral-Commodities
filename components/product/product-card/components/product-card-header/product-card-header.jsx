import Trans from 'next-translate/Trans';
import styles from '../../product-card.module.css';

function ProductCardTitle(props) {
  const { children } = props;
  return (
    <h3 className={styles.product__title}>
      <Trans i18nKey='common:productFields.grade' />:{' '}
      <span className={styles.product__titleValue}>{children}</span>
    </h3>
  );
}

export default ProductCardTitle;
