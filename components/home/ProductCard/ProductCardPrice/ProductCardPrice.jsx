import useTranslation from 'next-translate/useTranslation';
import styles from '../ProductCard.module.css';

function ProductCardPrice(props) {
  const { unit, price } = props;
  const { t } = useTranslation();
  return (
    <h3 className={styles.product__price}>
      {t('common:productFields.price from')}{' '}
      <span className={styles.product__priceValue}>
        {price ?? t('common:onRequest')}
        {price && t(`common:currency.${unit ?? 'default'}`)}
      </span>
    </h3>
  );
}

export default ProductCardPrice;
