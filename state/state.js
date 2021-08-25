import { useState, createContext } from 'react';
import { slugifyLink } from 'utils/nav-links';
import { getProductsApi } from 'api/api';

export const ProductsContext = createContext();

function GlobalState(props) {
  const [productsGradeList, setProductsGradeList] = useState(null);

  const addProductsGradeList = (t, products) => {
    const newProductsGradeList = products.reduce(
      (acc, product) => ({ ...acc, [slugifyLink(t, product)]: product.id }),
      {}
    );
    setProductsGradeList(newProductsGradeList);
  };

  const getProductIdByGrade = async (t, grade) => {
    if (!productsGradeList) {
      const cb = (products) => addProductsGradeList(t, products);
      const products = await getProductsApi('en', cb);
      const product = products.find(
        (product) => slugifyLink(t, product) === grade
      );
      return product?.id;
    }
    return productsGradeList[grade];
  };

  return (
    <ProductsContext.Provider
      value={{ addProductsGradeList, getProductIdByGrade }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}

export default GlobalState;
