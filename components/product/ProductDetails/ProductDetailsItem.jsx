import useTranslation from 'next-translate/useTranslation';
import { getTransKey } from 'utils/i18n.utils';
import styles from './ProductDetails.module.css';

function ProductDetailsItem(props) {
  const { field } = props;
  const { t } = useTranslation();
  return (
    <div className={styles.productPage__feature}>
      {getTransKey(t, 'common:productFields', field.key)}
      {': '}
      <span className={styles.productPage__featureValue}>{field.value}</span>
    </div>
  );
}

export default ProductDetailsItem;
