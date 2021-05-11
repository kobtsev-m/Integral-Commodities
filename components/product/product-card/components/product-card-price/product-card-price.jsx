import classes from "../../product-card.module.css";

function ProductCardPrice(props) {
  const { children } = props;
  return (
    <h3 className={classes.product__price}>
      Price: from{" "}
      <span className={classes.product__priceValue}>&#36;{children}</span>
    </h3>
  );
}

export default ProductCardPrice;
