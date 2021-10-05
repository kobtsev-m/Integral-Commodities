import useTranslation from 'next-translate/useTranslation';
import styles from '../ProductCard.module.css';
import { getKey, getTransKey, getTransValueSplitted } from 'utils/i18n.utils';

function ProductCardInfo(props) {
  const { fields, fieldsToFilter } = props;
  const { t } = useTranslation();

  function filterFields(fields) {
    return fields.filter(
      (item) => !!item.value && !fieldsToFilter.includes(item.key)
    );
  }

  return (
    <ul className={styles.product__infoList}>
      {filterFields(fields).map((field, i) => (
        <li key={i} className={styles.product__infoItem}>
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
      ))}
    </ul>
  );
}

export default ProductCardInfo;
