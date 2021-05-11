import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";

import ProductCard from "../product-card/product-card";
import classes from "./styles.module.css";

const PRODUCTS_TO_SHOW_STEP = 8;

function getProductGrade(product) {
  return product.prod_data.find((item) => item.key === "Type")?.value;
}
function getProductProcMethods(product) {
  return product.prod_data
    .find((item) => item.key === "Processing method")
    .value.split(", ")
    .map((item) => item.split(" ").join("").toLowerCase());
}

function filterByGrade(type) {
  return (product) => {
    return type ? getProductGrade(product)?.toLowerCase() === type : true;
  };
}
function filterByProcMethods(procmethod) {
  return (product) => {
    return procmethod
      ? getProductProcMethods(product).includes(procmethod)
      : true;
  };
}

function ProductsList(props) {
  const { products } = props;
  const [productsToShow, setProductsToShow] = useState(PRODUCTS_TO_SHOW_STEP);

  const router = useRouter();
  const { type, procmethod } = router.query;

  const filteredProducts = products
    .filter(filterByGrade(type))
    .filter(filterByProcMethods(procmethod));

  useEffect(() => {
    setProductsToShow(PRODUCTS_TO_SHOW_STEP);
  }, [products]);

  if (!products || !products.length || !filteredProducts.length) {
    return <h2>There is no products!</h2>;
  }

  const calcProductsToShow = (prevState) => {
    if (prevState + PRODUCTS_TO_SHOW_STEP > filteredProducts.length) {
      return filteredProducts.length;
    }

    return prevState + PRODUCTS_TO_SHOW_STEP;
  };
  const handleShowMoreButtonClick = () => {
    setProductsToShow((prevState) => calcProductsToShow(prevState));
  };

  return (
    <>
      <ul className="products__list">
        {filteredProducts.slice(0, productsToShow).map((product) => (
          <ProductCard key={nanoid()} product={product} />
        ))}
      </ul>
      {productsToShow < filteredProducts.length && (
        <button
          className={classes.showMoreBtn}
          onClick={handleShowMoreButtonClick}
        >
          Show more...
        </button>
      )}
    </>
  );
}

export default ProductsList;
