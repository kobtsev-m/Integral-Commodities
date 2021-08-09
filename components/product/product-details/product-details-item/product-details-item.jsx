import useTranslation from 'next-translate/useTranslation';
import styles from '../product-details.module.css';

const translatableFields = [
  'Type',
  'Processing method',
  'Application',
  'Appearance',
  'Origin'
];

function ProductDetailsItem(props) {
  const { field } = props;
  const { t } = useTranslation();

  const getKey = (key) => {
    return key.replace('.', '').toLowerCase();
  };
  const getValue = (field) => {
    if (translatableFields.includes(field.key)) {
      const values = field.value
        .split(', ')
        .map((value) =>
          t(`common:filter.${getKey(field.key)}.${getKey(value)}`)
        );
      return values.join(', ');
    }
    return field.value;
  };

  return (
    <div className={styles.productPage__feature}>
      {t(`common:productFields.${getKey(field.key)}`) + ': '}
      <span className={styles.productPage__featureValue}>
        {getValue(field)}
      </span>
    </div>
  );
}

export default ProductDetailsItem;
