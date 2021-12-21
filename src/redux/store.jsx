import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'
import rootReducer from './root-reducer';

export const history = createBrowserHistory();

const middlewares = [logger, thunk, routerMiddleware(history)];

if (process.env.NODE_ENV !== 'development') {
  middlewares.shift();
}

export const store = createStore(rootReducer(history), applyMiddleware(...middlewares));

export default store;

