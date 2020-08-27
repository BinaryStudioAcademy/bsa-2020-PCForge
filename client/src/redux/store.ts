import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import * as Sentry from '@sentry/react';

import rootReducer from 'redux/rootReducer';
import rootSaga from 'redux/rootSaga';

const sentryReduxEnhancer = Sentry.createReduxEnhancer();

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares), sentryReduxEnhancer);
const store = createStore(rootReducer, composedEnhancers);
sagaMiddleware.run(rootSaga);

export default store;
