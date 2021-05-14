import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ProductCard from '../product-card/product-card';
import styles from './styles.module.css';

const PRODUCTS_TO_SHOW_STEP = 8;

function getProductGrade(product) {
  return product.prod_data.find((item) => item.key === 'Type')?.value;
}
function getProductProcMethods(product) {
  return product.prod_data
    .find((item) => item.key === 'Processing method')
    .value.split(', ')
    .map((item) => item.split(' ').join('').toLowerCase());
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

function ProductsList({ products }) {
  const [productsToShow, setProductsToShow] = useState(PRODUCTS_TO_SHOW_STEP);

  const calcProductsToShow = (prevState) => {
    if (prevState + PRODUCTS_TO_SHOW_STEP > products.length) {
      return products.length;
    }
    return prevState + PRODUCTS_TO_SHOW_STEP;
  };

  const handleShowMoreButtonClick = () => {
    setProductsToShow((prevState) => calcProductsToShow(prevState));
  };

  if (!products || !products.length) {
    return <h2>There is no products!</h2>;
  }

  return (
    <>
      <ul className={'products__list'}>
        {products.slice(0, productsToShow).map((product) => (
          <ProductCard key={nanoid()} product={product} />
        ))}
      </ul>
      {products.length > PRODUCTS_TO_SHOW_STEP && (
        <button
          className={styles.showMoreBtn}
          onClick={handleShowMoreButtonClick}
        >
          Show more...
        </button>
      )}
    </>
  );
}

export default ProductsList;
