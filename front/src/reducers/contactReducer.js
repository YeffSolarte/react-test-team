import * as t from '../actions/types';

const initState = {
    error: false,
    loading: false,
    loaded: false,
    message: '',
};

export default (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case t.POST_CONTACT:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: false,
                message: '',
            };
        case t.POST_CONTACT_SUCCESS:
            return {
                ...state,
                loaded: true,
                error: false,
                loading: false,
                message: action.payload.message,
            };
        case t.POST_CONTACT_FAILURE:
            return {
                ...state,
                loaded: false,
                error: true,
                loading: false,
                message: '',
            };
        default:
            return state;
    }
}