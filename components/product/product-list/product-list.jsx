import { useState } from 'react';
import { nanoid } from 'nanoid';

import ProductCard from '../product-card/product-card';
import styles from './styles.module.css';

const PRODUCTS_TO_SHOW_STEP = 8;

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

  if (!products.length) {
    return <h2>There are no products!</h2>;
  }

  return (
    <>
      <ul className={'products__list'}>
        {products.slice(0, productsToShow).map((product) => (
          <ProductCard key={nanoid()} product={product} />
        ))}
      </ul>
      {products.length > productsToShow && (
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
