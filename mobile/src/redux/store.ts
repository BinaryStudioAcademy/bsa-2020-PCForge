import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'redux/rootReducer';
import rootSaga from 'redux/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;