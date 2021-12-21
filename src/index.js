import React from "react";
import ReactDOM from "react-dom";
import { Provider, ReactReduxContext } from 'react-redux';
import { store } from './redux/store';
import App from "./App";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
console.log('** ', history);

ReactDOM.render(
    <Provider store={store} context={ReactReduxContext}>
      <React.StrictMode>
        <App history={history}/>
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);