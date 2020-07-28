import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Erro404 = () => (
  <>
    <h3>
      Erro 404 - Página não encontrada.
    </h3>
  </>
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route component={Erro404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
