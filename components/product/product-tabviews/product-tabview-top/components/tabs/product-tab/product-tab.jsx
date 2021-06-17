import { nanoid } from "nanoid";
import cn from "classnames";

import ProductTabviewBottom from "../../../../product-tabview-bottom/product-tabview-bottom";
import ProductInfo from "components/product/product-info/product-info";

import styles from "components/product/product-details/product-details.module.css";
import tabClasses from "./product-tab.module.css";

function getProductProperties(product) {
  if (product.properties) {
    return product.properties.split("• ").slice(1);
  }
}

function ProductTab(props) {
  const { product } = props;
  const features = product.tech_data;
  const productProperties = getProductProperties(product);
  const hasProperties = productProperties?.length;

  return (
    <>
      <ProductInfo features={features} />
      {product.description && (
        <div className={cn(tabClasses.tab)}>
          <h2 className={styles.productPage__infoTitle}>Description</h2>
          <p className={styles.productPage__infoContent}>
            {product.description}
          </p>
        </div>
      )}
      {!!hasProperties && (
        <div className={cn(tabClasses.tab)}>
          <h2 className={styles.productPage__infoTitle}>Properties</h2>
          <ul>
            {productProperties.map((property, i) => (
              <li key={nanoid()} className={styles.productPage__infoContent}>
                {property}
              </li>
            ))}
          </ul>
        </div>
      )}
      {product.packaging && (
        <div className={cn(tabClasses.tab)}>
          <h2 className={styles.productPage__infoTitle}>Packaging</h2>
          <p className={styles.productPage__infoContent}>{product.packaging}</p>
        </div>
      )}
      <div className={cn(tabClasses.tab)}>
        <ProductTabviewBottom product={product} />
      </div>
    </>
  );
}

export default ProductTab;
