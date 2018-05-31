import { Observable } from 'rxjs';
import { toastr } from 'react-redux-toastr';
import { fetchCategories, deleteCategory, postCategory } from 'api';
import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
  REMOVE_CATEGORY,
  ADD_CATEGORY,
} from 'store/constants';
import {
  removeCategorySuccess,
  removeCategoryFailure,
  addCategorySuccess,
  addCategoryFailure,
} from 'store/redux/actions/categoriesActions';

export const getCategories = action$ =>
  action$
    .filter(action => action.type === GET_CATEGORIES)
    .mergeMap(() => fetchCategories())
    .map(({ data }) => {
      toastr.success('Fetching categories success!!!');
      return {
        type: GET_CATEGORIES_SUCCESS,
        categories: data,
      };
    })
    .catch(err => {
      toastr.error('Fetching categories error!');
      return Observable.of({
        type: GET_CATEGORIES_FAILURE,
        err,
      });
    });

export const removeCategory = action$ =>
  action$
    .filter(({ type }) => type === REMOVE_CATEGORY)
    .mergeMap(({ category }) =>
      Observable.forkJoin(deleteCategory(category)).map(() => ({ category })),
    )
    .map(({ category }) => {
      toastr.success(`Category ${category} has been successfully deleted!`);
      return removeCategorySuccess({ category });
    })
    .catch(err => {
      toastr.error(`Removing category error!`);
      return Observable.of(removeCategoryFailure({ err }));
    });

export const addCategory = action$ =>
  action$
    .filter(({ type }) => type === ADD_CATEGORY)
    .mergeMap(({ title, isPrivate }) =>
      Observable.forkJoin(postCategory({ title, isPrivate })).map(() => ({
        title,
        isPrivate,
      })),
    )
    .map(({ title, isPrivate }) => {
      toastr.success(`Category ${title} has been successfully added!`);
      return addCategorySuccess({ category: { title, isPrivate } });
    })
    .catch(err => {
      toastr.error(`Adding category error!`);
      return Observable.of(addCategoryFailure({ err }));
    });
