import { productsActions } from './products/products.reducer';
import { offersActions } from './offers/offers.reducer';

export const actions = {
  ...productsActions,
  ...offersActions
};
