import useTranslation from 'next-translate/useTranslation';
import styles from '../../product-card.module.css';
import { getKey, getTransKey, getTransValueSplitted } from 'utils/i18n';

function ProductCardInfoItem(props) {
  const { field } = props;
  const { t } = useTranslation();
  return (
    <li className={styles.product__infoItem}>
      {getTransKey(t, 'common:productFields', field.key)}
      {': '}
      <span className={styles.product__infoValue}>
        {getTransValueSplitted(
          t,
          ['common:filter', getKey(field.key)],
          field.value
        )}
      </span>
    </li>
  );
}

export default ProductCardInfoItem;
