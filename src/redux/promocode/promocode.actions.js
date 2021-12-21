import { API } from '../../config/constants/api';
import $http from '../../services/Http';
import PromoActionTypes from './promocode.types';

export const applyDiscount = (payload) => ({
  type: PromoActionTypes.APPLY_DISCOUNT,
  payload
});

export const displayPromocodeStatus = (payload) => ({
  type: PromoActionTypes.DISPLAY_PROMOCODE_STATUS,
  payload
});

export const validatePromoCode = (promocode) => {
  const url = `${ API.baseUrl }${ API.promoCode }`;
  const response = $http.post(url, {
    body: JSON.stringify({
      promocode
    })
  });
  return response;
}

export const applyPromoCode = (promocode) => (dispatch) => {
  validatePromoCode(promocode).then((res) => {
    res.errors && res.errors.length ? dispatch(displayPromocodeStatus(res)) : dispatch(applyDiscount({...res, promocode }));
  });
}
