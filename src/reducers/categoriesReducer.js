import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
    REMOVE_CATEGORY_SUCCESS,
    REMOVE_CATEGORY_FAILURE
} from '../constants';


const initialState = {
    items: [],
    isFetching: true
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                items: action.categories,
                isFetching: false
            }
        case GET_CATEGORIES_FAILURE:
            return {
                err: action.err,
                ...state
            }
        case REMOVE_CATEGORY_SUCCESS:
            const categories = state.items;
            return {
                ...state,
                isFetching: false,
                items: categories.filter(({title})=>title !== action.category.toLowerCase())
            }
        case REMOVE_CATEGORY_FAILURE:
            return {
                err: action.err,
                ...state
            }
        default:
            return state;
    }
}