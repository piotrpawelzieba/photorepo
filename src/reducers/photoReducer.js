import {
    FETCH_PHOTOS,
    FETCH_PHOTOS_SUCCESS,
    FETCH_PHOTOS_FAILURE
} from '../constants';

const initialState = {
    items: [],
}

export default function(state=initialState, action){
    switch(action.type){
        case FETCH_PHOTOS_SUCCESS:
            return {
                ...state,
                items: action.images
            }
        default:
            return state;
    }
}
