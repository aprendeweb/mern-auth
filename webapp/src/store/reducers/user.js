import {
  SIGNIN_REQUEST,
  SIGNUP_REQUEST,
  SIGNIN_SUCCESS,
  SIGNUP_SUCCESS,
} from '../actions/types';

export const userReducer = (state = { inPromise: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNIN_REQUEST:
    case SIGNUP_REQUEST:
      return { ...state, inPromise: true };

    case SIGNIN_SUCCESS:
      return { ...state, ...payload, inPromise: false };

    case SIGNUP_SUCCESS:
      const { msg } = payload;
      return { ...state, inPromise: false, msg };

    default:
      return state;
  }
};
