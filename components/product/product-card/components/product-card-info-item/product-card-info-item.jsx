import classes from "../../product-card.module.css";

function ProductCardInfoItem(props) {
  const { field } = props;

  return (
    <li className={classes.product__infoItem}>
      {field.key}:{" "}
      <span className={classes.product__infoValue}>{field.value}</span>
    </li>
  );
}

export default ProductCardInfoItem;
