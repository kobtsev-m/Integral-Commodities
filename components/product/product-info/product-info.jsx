import classes from "./product-info.module.css";
import IconInfo from "../../icons/icon-info";

function ProductInfo(props) {
  const { features } = props;
  const filteredFeatures = features.filter((feature) => feature.value);
  return (
    !!filteredFeatures.length && (
      <ul className={classes.productInfo__list}>
        {filteredFeatures.map((feature, i) => (
          <li className={classes.productInfo__item} key={`item-${i}`}>
            <IconInfo />
            <p className={classes.productInfo__itemText}>
              {feature.key}:{" "}
              <span className={classes.productInfo__itemValue}>
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
