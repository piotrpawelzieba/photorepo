// @flow

export type TCategoriesState = {
  categories: TState<Array<TCategory>>,
  // selectedCategoryId: ?number,
};

const initialState: TCategoriesState = {
  categories: {
    status: 'init',
    value: [],
    error: undefined,
  },
  selectedCategoryId: undefined,
};

export default initialState;
