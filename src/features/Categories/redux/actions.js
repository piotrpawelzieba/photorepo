// @flow
import createActionCreator from 'utils/createActionCreator';
import {
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
  REMOVE_CATEGORY,
  REMOVE_CATEGORY_SUCCESS,
  REMOVE_CATEGORY_FAILURE,
  SET_CATEGORY,
} from './constants';

export const getCategories = createActionCreator(GET_CATEGORIES);

export const getCategoriesSuccess = createActionCreator(
  GET_CATEGORIES_SUCCESS,
  (payload: Array<TCategory>) => ({
    payload,
  }),
);

export const getCategoriesFailure = createActionCreator(
  GET_CATEGORIES_FAILURE,
  (payload: Error) => ({
    payload,
    error: true,
  }),
);

export const setCategory = createActionCreator(
  SET_CATEGORY,
  (payload: string) => ({
    payload,
  }),
);

export const removeCategory = createActionCreator(
  REMOVE_CATEGORY,
  (payload: string) => ({
    payload,
  }),
);
export const removeCategorySuccess = createActionCreator(
  REMOVE_CATEGORY_SUCCESS,
);
export const removeCategoryFailure = createActionCreator(
  REMOVE_CATEGORY_FAILURE,
);

type TAddCategoryPayload = {
  title: string,
  isPrivate: boolean,
};
export const addCategory = createActionCreator(
  ADD_CATEGORY,
  (payload: TAddCategoryPayload) => ({
    payload,
  }),
);

export const addCategorySuccess = createActionCreator(
  ADD_CATEGORY_SUCCESS,
  payload => ({ payload }),
);
export const addCategoryFailure = createActionCreator(
  ADD_CATEGORY_FAILURE,
  payload => ({
    payload,
    error: true,
  }),
);
