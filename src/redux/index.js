import { combineEpics } from 'redux-observable';
import {removeCategory, addCategory, getCategories} from './epics/categories';
import {getPhotos, assignCategory, uploadPhoto} from './epics/photos';

import { combineReducers } from 'redux';
import photoReducer from './reducers/photoReducer';
import categoriesReducer from './reducers/categoriesReducer';
import {reducer as toastrReducer} from 'react-redux-toastr';

export const rootReducer = combineReducers({
    images: photoReducer,
    categories: categoriesReducer,
    toastr: toastrReducer
});


export const rootEpic = combineEpics(
    getCategories,
    removeCategory,
    addCategory,
    getPhotos,
    assignCategory,
    uploadPhoto
);
