import { ADD_NOTIFICATION } from '../actions/types';

export const notificationReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_NOTIFICATION:
      return { ...payload };

    default:
      return state;
  }
};
