import type { FC } from 'react';
import React from 'react';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';
import useProgress from 'hooks/useProgress';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas/index';

import reducers from './reducers';
import routes from './routes';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const App: FC = () => {
  useProgress();

  return (
    <Provider store={store}>
      <Router>{renderRoutes(routes)}</Router>
    </Provider>
  );
};

export default hot(App);

setConfig({
  showReactDomPatchNotification: false,
});
