import {combineReducers} from 'redux';

import photoReducer from './photoReducer.js';
import {reducer as toastrReducer} from 'react-redux-toastr'

export default combineReducers({
    images: photoReducer,
    toastr: toastrReducer
});
