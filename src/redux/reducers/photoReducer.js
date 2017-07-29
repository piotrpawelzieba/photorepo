import {
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAILURE,
    ASSIGN_CATEGORY_FAILURE,
    ASSIGN_CATEGORY_SUCCESS
} from '../../constants';

const initialState = {
    items: [],
};

export default function(state=initialState, action){
    switch(action.type){
        case GET_PHOTOS_SUCCESS:
            return {
                ...state,
                items: action.images
            };
        case GET_PHOTOS_FAILURE:
            return {
                ...state,
                err: action.err
            };
        case ASSIGN_CATEGORY_SUCCESS: {
            let newCollection = state.items.filter(item=>item._id !== action.id);
            let [itemToModify] = state.items.filter(item=>item._id === action.id);
            
            const modifiedItem = {
                ...itemToModify,
                ...action.payload
            };

            newCollection = [...newCollection, modifiedItem];
            
            return {
                ...state,
                items: newCollection
            };
        }
        case ASSIGN_CATEGORY_FAILURE:
            return {
                ...state,
                err: action.err
            };
        default:
            return state;
    }
}
