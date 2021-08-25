import useTranslation from 'next-translate/useTranslation';
import { getKey, getTransKey, getTransValueSplitted } from 'utils/i18n';
import styles from '../product-details.module.css';

function ProductDetailsItem(props) {
  const { field } = props;
  const { t } = useTranslation();
  return (
    <div className={styles.productPage__feature}>
      {getTransKey(t, 'common:productFields', field.key)}
      {': '}
      <span className={styles.productPage__featureValue}>
        {getTransValueSplitted(
          t,
          ['common:filter', getKey(field.key)],
          field.value
        )}
      </span>
    </div>
  );
}

export default ProductDetailsItem;
