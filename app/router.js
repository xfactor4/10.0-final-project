import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import $ from 'jquery';
import {Account, SetupCollection} from 'store';



import App from './components/app';
import Index from './components/index';
import Setup from './components/Setup';
import UpdateForm from './components/update-form';





ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="account" component={Setup}/>

    </Route>
  </Router>
), document.getElementById('application'));
