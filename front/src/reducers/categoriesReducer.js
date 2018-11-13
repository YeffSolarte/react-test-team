import { FETCH_CATEGORIES,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE } from '../actions/types';

const initState = {
    error: false,
    loaded: false,
    loading: false,
    categories: [],
};

export default (state = initState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: false,
                categories: [],
            };
        case FETCH_CATEGORIES_SUCCESS:
            console.log('action.payload.data');
            console.log(action.payload.data);
            console.log('action.payload.data');
            return {
                ...state,
                loaded: true,
                error: false,
                loading: false,
                categories: action.payload.data,
            };
        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                loaded: false,
                error: true,
                loading: false,
                categories: [],
            };
        default:
            return state
    }
}