import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from './reducers';
import reduxSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';

const sagaMiddleware = reduxSagaMiddleware();

const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);

export { store };
