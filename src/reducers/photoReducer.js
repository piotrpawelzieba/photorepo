import {
    GET_PHOTOS,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAILURE
} from '../constants';

const initialState = {
    items: [],
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_PHOTOS_SUCCESS:
            return {
                ...state,
                items: action.images
            }
        default:
            return state;
    }
}
