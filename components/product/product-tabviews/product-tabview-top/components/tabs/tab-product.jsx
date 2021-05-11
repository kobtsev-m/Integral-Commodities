import ProductInfo from "../../../../product-info/product-info";
import classes from "../../../../product-details/product-details.module.css";
import ProductTabviewBottom from "../../../product-tabview-bottom/product-tabview-bottom";

function getProductProperties(product) {
  if (product.properties) {
    return product.properties.split("• ").slice(1);
  }
}

function TabProduct(props) {
  const { product } = props;
  const features = product.tech_data;
  const productProperties = getProductProperties(product);
  const hasProperties = productProperties?.length;

  return (
    <>
      <ProductInfo features={features} />
      <div className={classes.productPage__info}>
        {product.description && (
          <div style={{ marginBottom: 40 }}>
            <h2 className={classes.productPage__infoTitle}>Description</h2>
            <p className={classes.productPage__infoContent}>
              {product.description}
            </p>
          </div>
        )}
        {!!hasProperties && (
          <div style={{ marginBottom: 40 }}>
            <h2 className={classes.productPage__infoTitle}>Properties</h2>
            <ul>
              {productProperties.map((property, i) => (
                <li
                  className={classes.productPage__infoContent}
                  key={`property-${i}`}
                >
                  {property}
                </li>
              ))}
            </ul>
          </div>
        )}
        {product.packaging && (
          <div style={{ marginBottom: 40 }}>
            <h2 className={classes.productPage__infoTitle}>Packaging</h2>
            <p className={classes.productPage__infoContent}>
              {product.packaging}
            </p>
          </div>
        )}
      </div>
      <ProductTabviewBottom product={product}  />
    </>
  );
}

export default TabProduct;
