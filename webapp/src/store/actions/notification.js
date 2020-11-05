import * as types from './types';

const actions = {};

actions.addNotification = (notification) => {
  return { type: types.ADD_NOTIFICATION, payload: notification };
};

export { actions };
