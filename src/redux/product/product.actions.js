import { API } from '../../config/constants/api';
import $http from '../../services/Http';
import ProductActionTypes from "./product.types";

export const fetchCollectionStart = () => ({
  type: ProductActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionFailure = (errorMessage ) => ({
  type: ProductActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsSuccess = (collections) => ({
  type: ProductActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: { products: collections }
});

export const fetchCollectionStartAsync = () => {
  console.log('fetchCollectionStartAsync()');
  return (dispatch) => {
    const url = `${ API.baseUrl }${ API.products }`;
    dispatch(fetchCollectionStart());
    $http.get(url).then((products) => {
      console.log('fetching products..', products);
      dispatch(fetchCollectionsSuccess(products));
    });
  }
}
