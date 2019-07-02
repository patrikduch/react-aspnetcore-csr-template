//-----------------------------------------------------------------------
// <copyright file="boot-client.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Client bootup configuration 
//-----------------------------------------------------------------------
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/sass/_Base.scss";
// React dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// Redux connector
import { Provider } from 'react-redux';
// Creation of Redux store heavy-weight object
import createStore from './redux/store/csr/csr-create-store';
const store = createStore((window as any).reduxState);
// Routing provider
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { renderRoutes } from 'react-router-config';
// Development container providing hot-reloading
import { AppContainer } from 'react-hot-loader';

const renderApp = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
      <BrowserRouter>
          <div>
          { renderRoutes(Routes)}
          </div>
      </BrowserRouter>
    </Provider>
    </AppContainer>
    ,
    document.getElementById("react-app")
  );
};

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
  module.hot.accept("./Routes", () => {
    renderApp();
  });
}
