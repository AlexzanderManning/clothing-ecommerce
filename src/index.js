import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Amplify from "aws-amplify";
import config from "./aws-exports";

import store from "./redux/store";
import App from "./App";
import "./index.css";

//Needed for amplify sign-in flow
Amplify.configure(config);


//App has to be wrapped inside Browser router.
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


