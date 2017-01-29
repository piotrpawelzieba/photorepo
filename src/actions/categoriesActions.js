import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
    REMOVE_CATEGORY_SUCCESS,
    REMOVE_CATEGORY_FAILURE
} from '../constants';

import {toastr} from 'react-redux-toastr';

import {fetchCategories, deleteCategory} from '../api';

const getCategoriesSuccess = (categories) => ({
    type: GET_CATEGORIES_SUCCESS,
    categories
});

const getCategoriesFailure = (err) => ({
    type: GET_CATEGORIES_FAILURE,
    err
});

const removeCategorySuccess = (category) => ({
    type: REMOVE_CATEGORY_SUCCESS,
    category
});

const removeCategoryFailure = (err) => ({
    type: REMOVE_CATEGORY_FAILURE,
    err
});



/* Async */ 

export const getCategories = () => (dispatch) => {
    fetchCategories()
    .then(({data: categories}) => {
        dispatch(getCategoriesSuccess(categories));
        toastr.success('Fetching categories success!');
    })
    .catch(err=>{
        console.log({fetchingCategoriesError: err});
        toastr.error('Fetching categories error!');
        dispatch(getCategoriesFailure(err));
    })
}


export const removeCategory = (title) => (dispatch) => {
    console.log({title});
    deleteCategory(title)
    .then(()=>{
        toastr.success(`Category ${title} has been successfully deleted!`);
        dispatch(removeCategorySuccess(title));
    })
    .catch(err=>{
        toastr.error(`Removing category error!`);
        dispatch(removeCategoryFailure(err));
    });
}