import { takeEvery, call, put } from 'redux-saga/effects';
import { SIGNIN_REQUEST, SIGNUP_REQUEST } from '../actions/types';
import { signIn, signUp } from '../../api/users';
import { userActions } from '../actions';
import { decode } from 'jsonwebtoken';

function* signInRequest(action) {
  const user = yield call(signIn, action.payload);
  const { data } = user;
  localStorage.setItem('token', data.info);
  yield put(userActions.signInSuccess(decode(data.info)));
}

function* signUpRequest(action) {
  const user = yield call(signUp, action.payload);
  const { data } = user;
  yield put(userActions.signUpSuccess(data));
}

function* userWatcher() {
  yield takeEvery(SIGNIN_REQUEST, signInRequest);
  yield takeEvery(SIGNUP_REQUEST, signUpRequest);
}

export { userWatcher };
