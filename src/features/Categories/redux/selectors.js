import { createSelector } from 'reselect';
import * as R from 'ramda';

const selectCategoriesContainer = state => state.categories;
export const selectImages = state => state.images;

export const selectCategoriesCount = createSelector(
  selectImages,
  R.pipe(
    R.prop('items'),
    R.filter(item => item.category !== 'undefined'),
    R.groupBy(item => item.category),
    R.toPairs,
    R.reduce(
      (acc, [category, items]) =>
        R.merge(acc, {
          [category]: items.length,
        }),
      {},
    ),
  ),
);
const itemsLens = R.lens(R.prop('items'), R.assoc('items'));

export const selectCategories = createSelector(
  selectCategoriesContainer,
  selectCategoriesCount,
  (categories, categoriesCount) =>
    R.over(
      itemsLens,
      R.map(item =>
        R.assoc('count', R.propOr(0, item.title, categoriesCount), item),
      ),
    )(categories),
);
