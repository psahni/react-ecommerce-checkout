import { API } from '../../config/constants/api';
import $http from '../../services/Http';
import { push } from 'connected-react-router';
import { ROUTES } from '../../config/constants/routes';

export const processCheckout = (cart_items, cardNumber) => (dispatch) => {
  console.log('processCheckout()');
  const url = `${ API.baseUrl}${API.checkout}`;
  const body = JSON.stringify({
    basket: cart_items.map((ci) => ({ sku: ci.product_id, quantity: ci.quantity })),
    cardNumber
  });

  const res = $http.post(url, { body });
  console.log(history)
  res.then((res) => {
    if (!res.errors) {
      return dispatch(push(ROUTES.Success));
    } else {
      return dispatch(push(ROUTES.Failure));
    }
  });
  return true;
}
