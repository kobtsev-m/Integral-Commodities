import useTranslation from 'next-translate/useTranslation';
import styles from '../../product-card.module.css';

const translatableFields = [
  'Type',
  'Processing method',
  'Application',
  'Appearance',
  'Origin'
];

function ProductCardInfoItem(props) {
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
    <li className={styles.product__infoItem}>
      {t(`common:productFields.${getKey(field.key)}`)}
      {': '}
      <span className={styles.product__infoValue}>{getValue(field)}</span>
    </li>
  );
}

export default ProductCardInfoItem;
