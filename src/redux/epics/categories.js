import { fetchCategories } from '../../api'
import {
    GET_CATEGORIES,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
    REMOVE_CATEGORY,
    REMOVE_CATEGORY_SUCCESS,
    ADD_CATEGORY,
    ADD_CATEGORY_FAILURE,
    REMOVE_CATEGORY_FAILURE
} from '../../constants';
import {toastr} from 'react-redux-toastr';
import Rx from 'rxjs';

export const getCategories = action$ => (
    action$
        .filter(action => action.type === GET_CATEGORIES)
        .mergeMap(() => fetchCategories())
        .map(({data}) => {
            toastr.success('Fetching categories success!!!');
            return {
                type: GET_CATEGORIES_SUCCESS,
                categories: data
            }
        })
        .catch((err) => {
            toastr.error('Fetching categories error!');
            return Observable.of({
                type: GET_CATEGORIES_FAILURE,
                err: err
            });
        })
);

export const removeCategory = (action$) => (
    action$
        .filter(({ type }) => type === REMOVE_CATEGORY)
        .mergeMap(({ title }) => deleteCategory(title))
        .map(() => {
            toastr.success(`Category ${title} has been successfully deleted!`)
            return ({
                type: REMOVE_CATEGORY_SUCCESS

            })
        })
        .catch(err => {
            toastr.error(`Removing category error!`);
            return Observable.of({
                type: REMOVE_CATEGORY_FAILURE,
                err: err
            });
        })
)

export const addCategory = (action$) => (
    action$
        .filter(({ type }) => type === ADD_CATEGORY)
        .mergeMap(({ title, isPrivate }) => (
            postCategory({ title, isPrivate })
                .map(() => { title, isPrivate })
        ))
        .map(({ title, isPrivate }) => {
            toastr.success(`Category ${title} has been successfully added!`);
            return ({
                type: ADD_CATEGORY_SUCCESS,
                category: {title, isPrivate}
            })
        })
        .catch(err => {
            toastr.error(`Adding category error!`);
            return Observable.of({
                type: ADD_CATEGORY_FAILURE,
                err: err
            });
        })
);

