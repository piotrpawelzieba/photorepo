// @flow
import type { ActionType } from './createActionCreator';

type Reducer<S, A> = (state: S, action: A) => S;

export type Handlers<S, A> = {
  [key: string]: (state: S, action: A) => S,
};

function createReducer<S, A: ActionType<*>>(
  initialState: S,
  handlers: Handlers<S, A>,
): Reducer<S, A> {
  return (state: S = initialState, action: A) =>
    Reflect.has(handlers, action.type)
      ? handlers[action.type](state, action)
      : state;
}

export default createReducer;
