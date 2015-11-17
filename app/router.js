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
import StartingBalance from './components/starting-balance';
import FixedIncome from './components/fixed-income';
import FixedExpenses from './components/fixed-expenses';
import Account from './components/Account';

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
        <Route path="startingBalance" component={StartingBalance}/>
        <Route path="fixedIncome" component={FixedIncome}/>
        <Route path="fixedExpenses" component={FixedExpenses}/>
        <Route path="signup" component={Signup} onEnter={requireNotAuth} />
    <Route path="account" component={Account} onEnter={requireAuth}/>


    </Route>
  </Router>
), document.getElementById('application'));
