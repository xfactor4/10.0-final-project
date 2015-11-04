import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import $ from 'jquery';




import App from './components/app';
import Index from './components/index';
import Login from './components/login';
import Signup from './components/signup';
import Setup from './components/Setup';
import UpdateForm from './components/update-form';

import store from './store';

function requireAuth(nextState, replaceState) {
  if( ! store.getSession().isAuthenticated ) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login');
  }
}

function requireNotAuth(nextState, replaceState) {
  if(store.getSession().isAuthenticated) {
    replaceState({}, '/');
  }
}




ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
    <IndexRoute component={Index} onEnter={requireAuth} />
      <Route path="login" component={Login} onEnter={requireNotAuth} />
        <Route path="signup" component={Signup} onEnter={requireNotAuth} />
    <Route path="account" component={Setup}/>

  
    </Route>
  </Router>
), document.getElementById('application'));
