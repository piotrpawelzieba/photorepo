// @flow
export type TLibraryState = {
  photos: TState<Array<TImage>>,
  selectedPhotoId: ?number,
};

const initialState: TLibraryState = {
  photos: {
    status: 'init',
    value: [],
    error: undefined,
  },
  selectedPhotoId: undefined,
};

export default initialState;
