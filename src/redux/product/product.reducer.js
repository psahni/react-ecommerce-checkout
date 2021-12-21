import ProductActionTypes from "./product.types";

const INITIAL_STATE = {
  collections: [],
  isFetching: false,
  errorMessage: ''
};

const productReducer  = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ProductActionTypes.FETCH_COLLECTIONS_START:
        return {
          ...state,
          isFetching: true
        };
      case ProductActionTypes.FETCH_COLLECTIONS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          collections: action.payload.products
        }
      case ProductActionTypes.FETCH_COLLECTIONS_FAILURE:
        return {
          ...state, 
          isFetching: true,
          collections: [],
          errorMessage: action.payload.errorMessage
        };
      default:
        return state;
    }
}

export default productReducer;