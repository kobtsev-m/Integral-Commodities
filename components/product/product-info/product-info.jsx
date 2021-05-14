import styles from './product-info.module.css';
import IconInfo from '../../icons/icon-info';

function ProductInfo(props) {
  const { features } = props;
  const filteredFeatures = features.filter((feature) => feature.value);
  return (
    !!filteredFeatures.length && (
      <ul className={styles.productInfo__list}>
        {filteredFeatures.map((feature, i) => (
          <li className={styles.productInfo__item} key={`item-${i}`}>
            <IconInfo />
            <p className={styles.productInfo__itemText}>
              {feature.key}:{' '}
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
