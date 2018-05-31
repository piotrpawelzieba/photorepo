import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { removeCategory, addCategory, getCategories } from './epics/categories';
import {
  getPhotos,
  assignCategory,
  uploadPhoto,
  deletePhoto,
} from './epics/photos';

import photoReducer from './reducers/photoReducer';
import categoriesReducer from './reducers/categoriesReducer';

export const rootReducer = combineReducers({
  images: photoReducer,
  categories: categoriesReducer,
  toastr: toastrReducer,
});

export const rootEpic = combineEpics(
  getCategories,
  removeCategory,
  addCategory,
  getPhotos,
  assignCategory,
  uploadPhoto,
  deletePhoto,
);
