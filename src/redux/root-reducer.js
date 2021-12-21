import { combineReducers } from 'redux';
import productReducer from './product/product.reducer';
import cartReducer from './cart/cart.reducer';
import promocodeReducer from './promocode/promocode.reducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({
  products: productReducer,
  cart: cartReducer,
  promocode: promocodeReducer,
  router: connectRouter(history)
});

export default rootReducer;
