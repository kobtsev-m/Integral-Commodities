import { nanoid } from 'nanoid';
import cn from 'classnames';

import ProductTabsViewBottom from '../../bottom/ProductTabsViewBottom';
import InfoTabList from 'components/blocks/Product/ProductTabsView/top/InfoTab/InfoTabList/InfoTabList';
import useTranslation from 'next-translate/useTranslation';

import styles from 'components/blocks/Product/ProductDetails/ProductDetails.module.css';
import tabClasses from './InfoTab.module.css';

function InfoTab(props) {
  const { product } = props;
  const { tech_data: features } = product;
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
      <InfoTabList features={features} />
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
        <ProductTabsViewBottom product={product} />
      </div>
    </>
  );
}

export default InfoTab;
