import Trans from 'next-translate/Trans';
import styles from '../../product-card.module.css';

function ProductCardPrice(props) {
  const { children } = props;
  return (
    <h3 className={styles.product__price}>
      {children && <Trans i18nKey='common:productFields.price from' />}{' '}
      <span className={styles.product__priceValue}>
        {children ?? <Trans i18nKey='common:onRequest' />}
        {children && <Trans i18nKey='common:currencySign' />}
      </span>
    </h3>
  );
}

export default ProductCardPrice;
