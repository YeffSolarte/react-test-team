import { FETCH_PRODUCTS,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE } from '../actions/types';

const initState = {
    error: false,
    loaded: false,
    loading: false,
    products: [],
    count: 0,
    hideCount: 0,
};

export default (state = initState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: false,
                products: [],
                count: 0,
                hideCount: 0,
            };
        case FETCH_PRODUCTS_SUCCESS:
            console.log('action.payload.data');
            console.log(action.payload.data);
            console.log('action.payload.data');
            return {
                loaded: true,
                error: false,
                loading: false,
                products: action.payload.data,
                count: action.payload.count,
                hideCount: action.payload.hideCount,
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loaded: false,
                error: true,
                loading: false,
                products: [],
                count: 0,
                hideCount: 0,
            };
        default:
            return state
    }
}