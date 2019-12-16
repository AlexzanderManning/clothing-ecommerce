import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; //Imports React Router
import { Provider } from 'react-redux';
import store  from './redux/store';

console.log(store.getState())
//App has to be wrapped inside Browser router.
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


