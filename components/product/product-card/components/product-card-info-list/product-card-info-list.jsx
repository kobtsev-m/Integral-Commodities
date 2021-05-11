import { nanoid } from "nanoid";

import classes from "../../product-card.module.css";
import ProductCardInfoItem from "../product-card-info-item/product-card-info-item";

function ProductCardInfoList(props) {
  const { fields, fieldsToFilter } = props;

  function filterFields(fields) {
    return fields.filter(
      (item) => !!item.value && !fieldsToFilter.includes(item.key)
    );
  }

  return (
    <ul className={classes.product__infoList}>
      {filterFields(fields).map((item) => (
        <ProductCardInfoItem key={nanoid()} field={item} />
      ))}
    </ul>
  );
}

export default ProductCardInfoList;
