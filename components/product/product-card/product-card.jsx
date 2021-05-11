import Link from "next/link";

import ProductCardTitle from "./components/product-card-header/product-card-header";
import ProductCardInfoList from "./components/product-card-info-list/product-card-info-list";
import ProductCardPrice from "./components/product-card-price/product-card-price";

import classes from "./product-card.module.css";
import classnames from "classnames";

const FIELDS_TO_FILTER = ["Price"];

function ProductCard(props) {
  const { product } = props;
  const { id, grade, price, card_data: prodData } = product;

  // добавляем поле Application на карточку товара
  if (!prodData.find((item) => item.key === "Application")) {
    prodData.push({ key: "Application", value: product.application });
  }

  const link = `/products/id/${id}?tab=offer`;

  return (
    <li>
      <Link href={link}>
        <a
          className={classnames(classes.product__link, {
            [classes.product__link_category_sulphur]:
              product.category === "sulphur",
            [classes.product__link_category_fertilizers]:
              product.category === "fertilizers",
          })}
        >
          <ProductCardTitle>{grade}</ProductCardTitle>
          <ProductCardInfoList
            fields={prodData}
            fieldsToFilter={FIELDS_TO_FILTER}
          />
          <ProductCardPrice>{price}</ProductCardPrice>
        </a>
      </Link>
    </li>
  );
}

export default ProductCard;
