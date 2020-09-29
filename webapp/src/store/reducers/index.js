import { combineReducers } from 'redux';
import { userReducer } from './user';

export const reducer = combineReducers({ user: userReducer });
