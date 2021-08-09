import IconInfo from '../../icons/icon-info';
import styles from './product-info.module.css';
import useWindowDimensions from '../../../utils/hooks/useWindowDemensions';
import Trans from 'next-translate/Trans';

function ProductInfo(props) {
  const { features } = props;
  const filteredFeatures = features.filter((feature) => feature.value);

  const { width } = useWindowDimensions();
  const size = width <= 768 ? 16 : 28;

  const getFieldKey = (field) => {
    return field.key.replace('.', '').toLowerCase();
  };

  return (
    !!filteredFeatures.length && (
      <ul className={styles.productInfo__list}>
        {filteredFeatures.map((feature, i) => (
          <li className={styles.productInfo__item} key={`item-${i}`}>
            <IconInfo size={{ width: size, height: size }} />
            <p className={styles.productInfo__itemText}>
              <Trans
                i18nKey={`common:productFields.${getFieldKey(feature)}`}
              />
              {': '}
              <span className={styles.productInfo__itemValue}>
                {feature.value}
              </span>
            </p>
          </li>
        ))}
      </ul>
    )
  );
}

export default ProductInfo;
