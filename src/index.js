/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

import App from './statefulComponents/app';

/* eslint-disable function-paren-newline */
ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('app'));
/* eslint-disable function-paren-newline */

