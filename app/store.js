import {Forecast, ForecastCollection} from './model/model';
import _ from 'underscore';
import Backbone from 'backbone';
import Session from './model/session';
import User from './model/user';
import UsersCollection from './model/user-collection';
import {RecurringTransaction, RecurringCollection} from './model/recurring-model';

let  RecurringTransactions = new RecurringCollection();
let session = new Session();
let forecasts = new ForecastCollection();
let users = new UsersCollection();


var Store = _.extend({}, Backbone.Events, {
  initialize() {
    this.listenTo(forecasts, 'add remove change', () => this.trigger('change'));
    this.listenTo(RecurringTransactions, 'add remove change', ()=> this.trigger('change'));
    this.listenTo(users, 'add change remove', this.trigger.bind(this, 'change'));
    this.listenTo(session, 'change', this.trigger.bind(this, 'change'));
  },


  getRecurringTransactions() {
    return RecurringTransactions.toJSON();
  },



  getForecasts() {
    return forecasts.toJSON();
  },

  saveRecurringTransactions(data, options) {

    return RecurringTransactions.create(data,options);

  },

  saveForecast(data,options) {
    return forecasts.create(data,options);
  },


invalidateSession() {
    return session.invalidate();
  },

  authenticateSession(options) {
    return session.authenticate(options);
  },

  getSession(){
    return session.toJSON();
  },

  restoreSession() {
    return session.restore();
  },

  createUser(attributes) {
    // TODO: this user should become the currentUser, instead of fetching again
    let user = new User(attributes);
    return user.save().then(() => {
      return session.authenticate({sessionToken: user.get('sessionToken')});
    });
  },

  saveUser(user, options) {
    options = _.extend({}, options, {merge: true});
    return users.create(user, options);
  },

  // TODO: do something if id doesn't exist
  getUser(id) {
    let user = users.get(id);
    if(user) {
      return user.toJSON();
    } else {
      users.fetch();
      return {};
    }
  },
});

Store.initialize();

export default Store;
