// @flow
import R from 'ramda';
import createReducer from 'utils/createReducer';
import initialState from './initialState';
/* eslint-disable no-underscore-dangle */

import {
  GET_PHOTOS_SUCCESS,
  ASSIGN_CATEGORY_SUCCESS,
  UPLOAD_PHOTO_SUCCESS,
  DELETE_PHOTO_SUCCESS,
  DELETE_PHOTO_FAILURE,
  ASSIGN_CATEGORY_FAILURE,
  UPLOAD_PHOTO_FAILURE,
  GET_PHOTOS_FAILURE,
} from './constants';

const onFailure = (state, action) =>
  R.assoc(
    'photos',
    {
      status: 'failure',
      value: state.photos.value,
      error: action.payload.message,
    },
    state,
  );

export default createReducer(initialState, {
  [GET_PHOTOS_SUCCESS]: (state, action) =>
    R.assoc(
      'photos',
      {
        status: 'loaded',
        value: action.payload,
        error: undefined,
      },
      state,
    ),
  [ASSIGN_CATEGORY_SUCCESS]: (state, action) => {
    const findIndex = R.findIndex(item => item._id === action.payload.id);
    return R.compose(
      index => R.adjust(index, R.merge(action.payload), state.photos.value),
      findIndex,
      R.prop('value'),
    )(state.photos);
  },

  [UPLOAD_PHOTO_SUCCESS]: (state, action) =>
    R.assocPath(
      ['photos', 'value'],
      R.concat(state.photos.value, action.photos.value),
      state,
    ),

  [DELETE_PHOTO_SUCCESS]: (state, action) =>
    R.evolve(
      {
        photos: {
          status: R.identity,
          value: R.filter(item => item._id !== action.payload.id),
          error: R.identity,
        },
      },
      state,
    ),
  [GET_PHOTOS_FAILURE]: onFailure,
  [DELETE_PHOTO_FAILURE]: onFailure,
  [UPLOAD_PHOTO_FAILURE]: onFailure,
  [ASSIGN_CATEGORY_FAILURE]: onFailure,
});
