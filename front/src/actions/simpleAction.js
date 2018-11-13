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

export const postContact = (form = {}) => dispatch => {
    dispatch(postContactAction());
    api.post(`contact`, form)
        .then(res => {
            console.log(res.data);
            dispatch(postContactSuccess(res.data));
        })
        .catch(err => {
            dispatch(postContactFailure(err.message));
        });
};

const postContactSuccess = todo => ({
    type: t.POST_CONTACT_SUCCESS,
    payload: {
        ...todo
    }
});

const postContactAction = () => ({
    type: t.POST_CONTACT
});

const postContactFailure = (error) => ({
    type: t.POST_CONTACT_FAILURE
});