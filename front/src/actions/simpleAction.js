import * as t from '../actions/types';
import api from '../api/api';

export const fetchProducts = (category = 'all') => dispatch => {
    dispatch(getProducts());
    api.get(`products/${category}`)
        .then(res => {
            console.log(res.data);
            dispatch(getProductsSuccess(res.data));
        })
        .catch(err => {
            console.log('err');
            console.log(err);
            console.log('err');
            dispatch(getProductsFailure(err.message));
        });
};

const getProductsSuccess = todo => ({
    type: t.FETCH_PRODUCTS_SUCCESS,
    payload: {
        ...todo
    }
});

const getProducts = () => ({
    type: t.FETCH_PRODUCTS
});

const getProductsFailure = error => ({
    type: t.FETCH_PRODUCTS_FAILURE
});