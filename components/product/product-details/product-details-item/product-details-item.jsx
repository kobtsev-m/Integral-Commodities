import classes from "../product-details.module.css";
import { nanoid } from "nanoid";

function ProductDetailsItem(props) {
  const { field } = props;

  return (
    <li className={classes.productPage__feature} key={nanoid()}>
      {field.key}:{" "}
      <span className={classes.productPage__featureValue}>{field.value}</span>
    </li>
  );
}

export default ProductDetailsItem;
