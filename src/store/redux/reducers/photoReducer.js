/* eslint-disable no-underscore-dangle */
import {
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILURE,
  ASSIGN_CATEGORY_FAILURE,
  ASSIGN_CATEGORY_SUCCESS,
  UPLOAD_PHOTO_SUCCESS,
  UPLOAD_PHOTO_ERROR,
  DELETE_PHOTO_FAILURE,
  DELETE_PHOTO_SUCCESS,
} from 'store/constants';

const initialState = {
  items: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        items: action.images,
      };
    case ASSIGN_CATEGORY_SUCCESS: {
      let newCollection = state.items.filter(item => item._id !== action.id);
      const [itemToModify] = state.items.filter(item => item._id === action.id);

      const modifiedItem = {
        ...itemToModify,
        ...action.payload,
      };

      newCollection = [...newCollection, modifiedItem];

      return {
        ...state,
        items: newCollection,
      };
    }
    case UPLOAD_PHOTO_SUCCESS:
      return {
        ...state,
        items: [...state.items, ...action.photos],
      };
    case DELETE_PHOTO_SUCCESS:
      return {
        ...state,
        items: state.items.filter(photo => photo._id !== action.id),
      };
    case DELETE_PHOTO_FAILURE:
    case GET_PHOTOS_FAILURE:
    case UPLOAD_PHOTO_ERROR:
    case ASSIGN_CATEGORY_FAILURE:
      return {
        ...state,
        err: action.err,
      };
    default:
      return state;
  }
}
