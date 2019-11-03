import { createStore, combineReducers } from 'redux';

import cart from './modules/cart/reducer';

const store = createStore(
  combineReducers({
    cart,
  })
);

export default store;
