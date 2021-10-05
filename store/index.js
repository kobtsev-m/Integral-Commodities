import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers/reducers';
import { actions } from './reducers/actions';

export const store = createStore(reducers, applyMiddleware(thunk));

export { actions };
