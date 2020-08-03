import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import App from 'containers/App';
import history from './browserHistory';
import * as serviceWorker from './serviceWorker';
import 'styles/index.sass';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
