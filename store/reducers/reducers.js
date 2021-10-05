import { combineReducers } from 'redux';
import { productsReducer } from './products/products.reducer';
import { offersReducer } from './offers/offers.reducer';

export const reducers = combineReducers({
  products: productsReducer,
  offers: offersReducer
});
