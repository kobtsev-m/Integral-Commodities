import { slugifyLink } from 'utils/nav-links';

export const ADD_PRODUCTS_GRADE_LIST = 'ADD_PRODUCTS_LIST';

export const productsReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_GRADE_LIST:
      return {
        ...state,
        productsGradeList: action.payload.reduce(
          (acc, product) => ({ ...acc, [slugifyLink(product)]: product.id }),
          {}
        )
      };
    default:
      return state;
  }
};
