import { useReducer, createContext } from 'react';
import { slugifyLink } from 'utils/nav-links';
import { getProductsApi } from 'api/api';
import { productsReducer, ADD_PRODUCTS_GRADE_LIST } from './reducers';

export const ProductsContext = createContext();

function GlobalState(props) {
  const [productState, dispatch] = useReducer(productsReducer, {});

  const addProductsGradeList = (products) => {
    dispatch({ type: ADD_PRODUCTS_GRADE_LIST, payload: products });
  };

  const getProductIdByGrade = async (grade) => {
    if (!productState.productsGradeList) {
      const products = await getProductsApi(addProductsGradeList);
      return products.find((product) => slugifyLink(product) === grade).id;
    }
    return productState.productsGradeList[grade];
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
