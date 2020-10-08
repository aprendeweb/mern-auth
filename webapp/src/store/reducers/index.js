import { combineReducers } from 'redux';
import { userReducer } from './user';
import { reducer as formReducer } from 'redux-form';

export const reducer = combineReducers({
  user: userReducer,
  form: formReducer,
});
