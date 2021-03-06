import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faMoon,
  faSun,
  faBars,
  faUser,
  faKey,
  faPlus,
  faWindowClose,
  faCheckCircle,
  faEdit,
  faTrashAlt,
  faCheckSquare,
  faSquare
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faMoon,
  faSun,
  faSearch,
  faBars,
  faUser,
  faKey,
  faPlus,
  faWindowClose,
  faCheckCircle,
  faEdit,
  faTrashAlt,
  faCheckSquare,
  faSquare
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
