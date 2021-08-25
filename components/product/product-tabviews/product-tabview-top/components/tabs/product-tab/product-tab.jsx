import { nanoid } from 'nanoid';
import cn from 'classnames';

import ProductTabviewBottom from '../../../../product-tabview-bottom/product-tabview-bottom';
import ProductInfo from 'components/product/product-info/product-info';
import useTranslation from 'next-translate/useTranslation';

import styles from 'components/product/product-details/product-details.module.css';
import tabClasses from './product-tab.module.css';

function ProductTab(props) {
  const { product } = props;
  const features = product.tech_data;
  const { t } = useTranslation();

  const getProductProperties = (product) => {
    if (product.properties) {
      return product.properties.split('• ').slice(1);
    }
    return null;
  };

  const productProperties = getProductProperties(product);

  return (
    <>
      <ProductInfo features={features} />
      {product.description && (
        <div className={cn(tabClasses.tab)}>
          <h2 className={styles.productPage__infoTitle}>
            {t('product:info.description')}
          </h2>
          <p className={styles.productPage__infoContent}>
            {product.description}
          </p>
        </div>
      )}
      {productProperties && (
        <div className={cn(tabClasses.tab)}>
          <h2 className={styles.productPage__infoTitle}>
            {t('product:info.properties')}
          </h2>
          <ul>
            {productProperties.map((property) => (
              <li key={nanoid()} className={styles.productPage__infoContent}>
                {property}
              </li>
            ))}
          </ul>
        </div>
      )}
      {product.packaging && (
        <div className={cn(tabClasses.tab)}>
          <h2 className={styles.productPage__infoTitle}>
            {t('product:info.packaging')}
          </h2>
          <p className={styles.productPage__infoContent}>
            {product.packaging}
          </p>
        </div>
      )}
      <div className={cn(tabClasses.tab)}>
        <ProductTabviewBottom product={product} />
      </div>
    </>
  );
}

export default ProductTab;
