import PromoActionTypes from "./promocode.types";

const INITIAL_STATE = {
  value: 0,
  errors: {
    msg: ''
  },
  discount: {
    discounttype: 'percent',
    amount: 0
  }
};

const promocodeReducer = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PromoActionTypes.DISPLAY_PROMOCODE_STATUS:
      const error = action.payload.errors.find((e) => e.field === 'promoCode');
      return {
        ...state,
        errors: { msg: (error.msg || 'Invalid Promocode') }
      };
    case PromoActionTypes.APPLY_DISCOUNT:
      return {
        ...state,
        value: action.payload.promocode,
        errors: { msg: '' },
        discount: action.payload
      }
    default:
      return state;
  }
}

export default promocodeReducer;
