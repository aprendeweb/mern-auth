import { SIGNIN_REQUEST, SIGNUP_REQUEST } from '../actions/types';

export const userReducer = (state = { inPromise: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNIN_REQUEST:
    case SIGNUP_REQUEST:
      return { ...state, inPromise: true };

    default:
      return state;
  }
};
