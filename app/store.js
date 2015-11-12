import {Forecast, ForecastCollection} from './model/model';
import _ from 'underscore';
import Backbone from 'backbone';
import Session from './model/session';
import User from './model/user';
import UsersCollection from './model/user-collection';
import {RecurringIncomeTransaction, RecurringIncomeCollection} from './model/recurring_income';
import {RecurringExpenseTransaction, RecurringExpenseCollection} from './model/recurring_expense';
import {IncomeTransaction, IncomeTransactionCollection} from './model/transactions';

let IncomeTransactions = new IncomeTransactionCollection();
let RecurringIncomeTransactions = new RecurringIncomeCollection();
let  RecurringExpenseTransactions = new RecurringExpenseCollection();
let session = new Session();
let forecasts = new ForecastCollection();
let users = new UsersCollection();


var Store = _.extend({}, Backbone.Events, {
  initialize() {
    this.listenTo(forecasts, 'add remove change', () => this.trigger('change'));
    this.listenTo(RecurringIncomeTransactions, 'add remove change', ()=> this.trigger('change'));
    this.listenTo(RecurringExpenseTransactions, 'add remove change', ()=> this.trigger('change'));
    this.listenTo(IncomeTransactions, 'add remove change',()=> this.trigger('change'));
    this.listenTo(users, 'add change remove', this.trigger.bind(this, 'change'));
    this.listenTo(session, 'change', this.trigger.bind(this, 'change'));
  },

  getIncomeTransactions() {
    return IncomeTransactions.toJSON();
  },


  getRecurringIncomeTransactions() {
    return RecurringIncomeTransactions.toJSON();
  },

  getRecurringExpenseTransactions() {
    return RecurringExpenseTransactions.toJSON();
  },



  getForecasts() {
    return forecasts.toJSON();
  },

  saveIncomeTransactions(data,options){
    return IncomeTransactions.create(data, options);
  },

  saveRecurringIncomeTransactions(data, options) {

    return RecurringIncomeTransactions.create(data,options);

  },

  saveRecurringExpenseTransactions(data, options) {

    return RecurringExpenseTransactions.create(data,options);

  },


destroyIncomeTransactions(IncomeTransaction) {
  return IncomeTransactions.get(IncomeTransaction.objectId).destroy();
},


  destroyRecurringIncomeTransactions(RecurringIncomeTransaction) {
    return RecurringIncomeTransactions.get(RecurringIncomeTransaction.objectId).destroy();
  },

  destroyRecurringExpenseTransactions(RecurringExpenseTransaction) {
    return RecurringExpenseTransactions.get(ReccuringExpenseTransaction.objectId).destroy();
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
