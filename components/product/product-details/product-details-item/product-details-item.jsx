import useTranslation from 'next-translate/useTranslation';
import styles from '../product-details.module.css';
import { getKey, getTransKey, getTransValueSplitted } from 'utils/i18n';

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
