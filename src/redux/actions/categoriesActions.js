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
} from '../../constants';

import {toastr} from 'react-redux-toastr';

import {
    fetchCategories, 
    deleteCategory, 
    postCategory
} from '../../api';

import {createActionCreator} from './utils';

export const getCategories = createActionCreator(GET_CATEGORIES);
export const getCategoriesSuccess = createActionCreator(GET_CATEGORIES_SUCCESS);
export const getCategoriesFailure = createActionCreator(GET_CATEGORIES_FAILURE);

export const setCategory = createActionCreator(SET_CATEGORY);

export const removeCategory = createActionCreator(REMOVE_CATEGORY);
export const removeCategorySuccess = createActionCreator(REMOVE_CATEGORY_SUCCESS);
export const removeCategoryFailure = createActionCreator(REMOVE_CATEGORY_FAILURE);

export const addCategory = createActionCreator(ADD_CATEGORY);
export const addCategorySuccess = createActionCreator(ADD_CATEGORY_SUCCESS);
export const addCategoryFailure = createActionCreator(ADD_CATEGORY_FAILURE);