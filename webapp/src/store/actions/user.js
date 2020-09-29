import * as types from './types';

const actions = {};

actions.signUpRequest = (user) => {
  return {
    type: types.SIGNUP_REQUEST,
    payload: user,
  };
};

actions.signUpSuccess = (user) => {
  return {
    type: types.SIGNUP_SUCCESS,
    payload: user,
  };
};

actions.signInRequest = (user) => {
  return {
    type: types.SIGNIN_REQUEST,
    payload: user,
  };
};

actions.signInSuccess = (user) => {
  return {
    type: types.SIGNIN_SUCCESS,
    payload: user,
  };
};

export const actions;
