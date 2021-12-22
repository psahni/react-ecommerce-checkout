import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ConnectedRouter } from 'connected-react-router'
import Header from "./components/Header";
import Product from './components/product/Product';
import Checkout from './components/checkout/Checkout';
import Failure from "./components/checkout/Failure";
import Success from "./components/checkout/Success";
import { ROUTES } from './config/constants/routes'

import "./style.css";

const App = ({ history }) => {
  return (
    <div>
      <Header/>
      <BrowserRouter history={history}>
        <Routes>
          <Route exact path={ROUTES.Products} element={<Product />} />
          <Route exact path={ROUTES.Checkout} element={<Checkout />} />
          <Route exact path={ROUTES.Failure} element={<Failure />} />
          <Route exact path={ROUTES.Success} element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
