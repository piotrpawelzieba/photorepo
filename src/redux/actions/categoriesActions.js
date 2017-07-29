import {
    ADD_CATEGORY_SUCCESS,
    ADD_CATEGORY_FAILURE,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
    REMOVE_CATEGORY_SUCCESS,
    REMOVE_CATEGORY_FAILURE,
    SET_CATEGORY,
    GET_CATEGORIES
} from '../../constants';

import {toastr} from 'react-redux-toastr';

import {
    fetchCategories, 
    deleteCategory, 
    postCategory
} from '../../api';

export const getCategories = () => ({
    type: GET_CATEGORIES
});

export const getCategoriesSuccess = (categories) => ({
    type: GET_CATEGORIES_SUCCESS,
    categories
});

export const getCategoriesFailure = (err) => ({
    type: GET_CATEGORIES_FAILURE,
    err
});


export const setCategory = (category) => ({
    type: SET_CATEGORY,
    category
});

const removeCategorySuccess = (category) => ({
    type: REMOVE_CATEGORY_SUCCESS,
    category
});

const removeCategoryFailure = (err) => ({
    type: REMOVE_CATEGORY_FAILURE,
    err
});

const addCategorySuccess = (newCategory) => ({
    type: ADD_CATEGORY_SUCCESS,
    category: newCategory
});

const addCategoryFailure = (err) => ({
    type: ADD_CATEGORY_FAILURE,
    err
});



