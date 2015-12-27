import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { syncReduxAndRouter } from 'redux-simple-router';
import routes from './routes';
import Root from './containers/Root';
import configureStore from './redux/configureStore';
import { getStoredState, persistStore } from 'redux-persist';
import { setDispatcher } from './utils/firebase/config';

const persistConfig = {
  whitelist: ['account']
};
// Render the React application to the DOM
getStoredState(persistConfig, (err, initialState) => {
  const history = createBrowserHistory();
  const store = configureStore(initialState, __DEBUG__);
  syncReduxAndRouter(history, store, (state) => state.router);
  // We render the DevTools window here rather than in the Root component
  // because we need access to the store but want this logic to be removed via
  // uglification and dead code removal when __DEBUG_NW__ is false, which
  // wouldn't be possible if it was handled via a React component prop.
  if (__DEBUG__ && __DEBUG_NW__) {
    require('utils/createDevToolsWindow').default(store);
  }
  setDispatcher(store);
  persistStore(store, persistConfig);
  ReactDOM.render(
    <Root history={history} routes={routes} store={store} />,
    document.getElementById('root')
  );
});
