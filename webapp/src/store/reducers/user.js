import { SIGNUP_REQUEST } from '../actions/types';

export const userReducer = (state = { inPromise: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_REQUEST:
      return { ...state, payload, inPromise: true };

    default:
      return state;
  }
};
