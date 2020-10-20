import { takeEvery, call, put } from 'redux-saga/effects';
import { SIGNIN_REQUEST, SIGNUP_REQUEST } from '../actions/types';
import { signIn, signUp } from '../../api/users';
import { userActions } from '../actions';

function* signInRequest(action) {
  const user = yield call(signIn, action.payload);
  const { data } = user;
  yield put(userActions.signInSuccess(data));
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
