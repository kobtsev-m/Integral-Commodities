import { getOffersApi } from 'api/api';

const initialState = {
  offers: null,
  lang: null,
  category: null,
  isOffersLoading: true
};

export const offersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_OFFERS':
      return { ...state, ...action.payload, isOffersLoading: false };
    case 'SET_IS_OFFERS_LOADING':
      return { ...state, isOffersLoading: true };
    default:
      return state;
  }
};

export const offersActions = {
  setOffers: (offers, lang, category) => ({
    type: 'SET_OFFERS',
    payload: { offers, lang, category }
  }),
  setIsOffersLoading: () => ({
    type: 'SET_IS_OFFERS_LOADING'
  }),
  fetchOffers: (lang, category) => async (dispatch, getState) => {
    let { offers, lang: currLang, category: currCategory } = getState().offers;
    if (offers?.length && currCategory === category && currLang === lang) {
      return;
    }
    dispatch(offersActions.setIsOffersLoading());
    try {
      offers = await getOffersApi(lang, category);
      dispatch(offersActions.setOffers(offers, lang, category));
    } catch (e) {
      console.log(e);
    }
  }
};
