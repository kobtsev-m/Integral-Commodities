import classes from "../../product-card.module.css";

function ProductCardTitle(props) {
  const { children } = props;

  return (
    <h3 className={classes.product__title}>
      Grade: <span className={classes.product__titleValue}>{children}</span>
    </h3>
  );
}

export default ProductCardTitle;
