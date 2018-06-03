// @flow
import R from 'ramda';
import type { ActionType } from 'utils/createActionCreator';
import createReducer from 'utils/createReducer';
import initialState from './initialState';
import {
  GET_CATEGORIES_SUCCESS,
  SET_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  REMOVE_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  GET_CATEGORIES_FAILURE,
  REMOVE_CATEGORY_FAILURE,
} from './constants';

const handlers = {
  [GET_CATEGORIES_SUCCESS]: (state, action) =>
    R.assoc('categories', {
      status: 'loaded',
      value: action.payload,
    }),
  [SET_CATEGORY]: (state, { payload }) =>
    R.assoc('selectedCategoryId', payload, state),

  [ADD_CATEGORY_SUCCESS]: ({ categories }, { payload }) =>
    R.assoc('categories', {
      status: 'loaded',
      value: R.concat(categories.value, payload),
    }),

  [REMOVE_CATEGORY_SUCCESS]: (state, { payload }) =>
    R.assoc('categories', {
      status: 'loaded',
      value: R.filter(item => item.title !== R.toLower(payload))(
        state.categories.value,
      ),
    }),

  [ADD_CATEGORY_FAILURE]: (state, action) =>
    R.assoc('categories', { status: 'fialure', error: action.payload.message }),
  [GET_CATEGORIES_FAILURE]: (state, action) =>
    R.assoc('categories', { status: 'fialure', error: action.payload.message }),
  [REMOVE_CATEGORY_FAILURE]: (state, action) =>
    R.assoc('categories', {
      status: 'fialure',
      error: action.payload.message,
    }),
};

export default createReducer(initialState, handlers);
