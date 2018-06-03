// @flow
export type ActionType<T> = {
  type: string,
  payload: T | *,
  meta?: *,
  error?: boolean,
};

type ActionPayloadCreator<T> = (
  args: T,
) => {|
  payload: T | ?*,
  meta?: *,
  error?: boolean,
|};

type ActionCreator<T> = (args: T) => ActionType<T>;

const createActionCreator = <T>(
  type: string,
  creatorFunction: ActionPayloadCreator<T> = () => ({
    payload: null,
    error: false,
  }),
): ActionCreator<T> => {
  const action = (...args): ActionType<T> => ({
    type,
    ...creatorFunction(...args),
  });

  return action;
};

export default createActionCreator;
