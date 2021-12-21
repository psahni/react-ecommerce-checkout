import CartTypes from "./cart.types";

const INITIAL_STATE = {
  cart_items:  [],
}


const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.ADD_TO_CART:
      const new_cart_item = action.payload.cart_item;
      const cart_item = state.cart_items.find((ci) => ci.product_id === new_cart_item.product_id);
      let cart_items;

      if (cart_item) {
        cart_items = state.cart_items.map((ci) => (ci.product_id === cart_item.product_id) ? {...ci, quantity: ci.quantity + 1 } : ci);
      } else { 
        cart_items = [...state.cart_items, new_cart_item];
      }
      return { cart_items };
    case CartTypes.REMOVE:
      return { cart_items: state.cart_items.filter((ci) => ci.product_id !== action.payload.cart_item) };
    default:
      return state;
  }
}

export default cartReducer;
