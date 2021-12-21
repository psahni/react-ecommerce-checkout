import CartTypes from "./cart.types";

export const addToCart = (cart_item) => ({
  type: CartTypes.ADD_TO_CART,
  payload: { cart_item }
});


export const removeFromCart = (cart_item) => ({
  type: CartTypes.REMOVE,
  payload: { cart_item }
});

