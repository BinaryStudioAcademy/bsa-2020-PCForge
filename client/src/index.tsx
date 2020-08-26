import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import store from 'redux/store';
import App from 'containers/App';
import history from './browserHistory';
import * as serviceWorker from './serviceWorker';
import 'styles/index.scss';
import { theme } from 'assets/jss/theme';
import SentryInstance from './sentry';

SentryInstance.run();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
