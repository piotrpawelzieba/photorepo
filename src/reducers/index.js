import {combineReducers} from 'redux';

import photoReducer from './photoReducer.js';
import categoriesReducer from './categoriesReducer.js';
import {reducer as toastrReducer} from 'react-redux-toastr'

export default combineReducers({
    images: photoReducer,
    categories: categoriesReducer,
    toastr: toastrReducer
});
