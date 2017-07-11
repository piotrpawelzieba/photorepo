import {combineReducers} from 'redux';

import photoReducer from './photoReducer';
import categoriesReducer from './categoriesReducer';
import {reducer as toastrReducer} from 'react-redux-toastr';

export default combineReducers({
    images: photoReducer,
    categories: categoriesReducer,
    toastr: toastrReducer
});
