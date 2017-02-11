import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
    REMOVE_CATEGORY_SUCCESS,
    REMOVE_CATEGORY_FAILURE,
    ADD_CATEGORY_SUCCESS,
    ADD_CATEGORY_FAILURE
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
        case ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: [...state.items, action.category]
            }
        case REMOVE_CATEGORY_SUCCESS:
            const categories = state.items;
            return {
                ...state,
                isFetching: false,
                items: categories.filter(({title})=>title !== action.category.toLowerCase())
            }
        case ADD_CATEGORY_FAILURE:
        case GET_CATEGORIES_FAILURE:
        case REMOVE_CATEGORY_FAILURE:
            return {
                err: action.err,
                ...state
            }
        default:
            return state;
    }
}