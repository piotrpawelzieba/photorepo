// @flow
declare type TState<T> = {
  status: 'init' | 'loading' | 'loaded' | 'failure',
  value: Array<any>,
  error?: string,
};
