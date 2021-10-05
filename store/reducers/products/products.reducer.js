import { slugifyLink } from 'utils/navigation.utils';
import {
  getAnalogsByProductIdApi,
  getPlaceCoordinatesByNameApi,
  getProductsApi
} from 'api/api';

const initialState = {
  lang: null,
  products: null,
  activeProduct: null,
  isProductsLoading: true,
  isActiveProductLoading: true
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, ...action.payload, isProductsLoading: false };
    case 'SET_ACTIVE_PRODUCT':
      return { ...state, ...action.payload, isActiveProductLoading: false };
    case 'SET_IS_PRODUCTS_LOADING':
      return { ...state, isProductsLoading: true };
    case 'SET_IS_ACTIVE_PRODUCT_LOADING':
      return { ...state, isActiveProductLoading: true };
    default:
      return state;
  }
};

const addCoordinatesToPlaces = (places) => {
  if (!places) {
    return [];
  }
  const newPlacesPromises = places.map(async (place) => {
    const coordinates = await getPlaceCoordinatesByNameApi(
      place.name ?? place
    );
    return place.name
      ? { ...place, ...coordinates }
      : { name: place, ...coordinates };
  });
  return Promise.all(newPlacesPromises);
};

export const productsActions = {
  setProducts: (products, lang) => ({
    type: 'SET_PRODUCTS',
    payload: { products, lang }
  }),
  setActiveProduct: (activeProduct, lang) => ({
    type: 'SET_ACTIVE_PRODUCT',
    payload: { activeProduct, lang }
  }),
  setIsProductsLoading: () => ({
    type: 'SET_IS_PRODUCTS_LOADING'
  }),
  setIsActiveProductLoading: () => ({
    type: 'SET_IS_ACTIVE_PRODUCT_LOADING'
  }),
  fetchProducts: (lang) => async (dispatch, getState) => {
    let { products, lang: currLang } = getState().products;
    if (!!products && currLang === lang) {
      return;
    }
    await dispatch(productsActions.setIsProductsLoading());
    try {
      products = await getProductsApi(lang);
      await dispatch(productsActions.setProducts(products, lang));
    } catch (e) {
      console.log(e);
    }
  },
  fetchActiveProduct: (grade, lang, t) => async (dispatch, getState) => {
    let { products, activeProduct, lang: currLang } = getState().products;
    if (activeProduct?.grade === grade && currLang === lang) {
      return;
    }
    await dispatch(productsActions.setIsActiveProductLoading());
    if (!products || currLang !== lang) {
      await dispatch(productsActions.fetchProducts(lang));
    }
    products = getState().products.products;
    activeProduct = products.find(
      (product) => slugifyLink(t, product) === grade
    );
    if (!activeProduct) {
      await dispatch(productsActions.setActiveProduct(null, lang));
    }
    const mapObj = activeProduct.doc_data?.find((item) => 'map' in item);
    const updatedActiveProduct = {
      ...activeProduct,
      ports: await addCoordinatesToPlaces(mapObj?.map),
      factories: await addCoordinatesToPlaces(mapObj?.availability),
      analogs: await getAnalogsByProductIdApi(activeProduct.id)
    };
    await dispatch(
      productsActions.setActiveProduct(updatedActiveProduct, lang)
    );
  }
};
