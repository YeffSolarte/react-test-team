import * as t from '../actions/types';
import api from '../api/api';

export const fetchCategories = (category = 'all') => dispatch => {
    dispatch(getCategories());
    api.get(`categories`)
        .then(res => {
            console.log(res.data);
            dispatch(getCategoriesSuccess(res.data));
        })
        .catch(err => {
            dispatch(getCategoriesFailure(err.message));
        });
};

const getCategoriesSuccess = todo => ({
    type: t.FETCH_CATEGORIES_SUCCESS,
    payload: {
        ...todo
    }
});

const getCategories = () => ({
    type: t.FETCH_CATEGORIES
});

const getCategoriesFailure = error => ({
    type: t.FETCH_PRODUCTS_FAILURE
});