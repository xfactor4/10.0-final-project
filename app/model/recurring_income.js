import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import moment from 'moment';


let RecurringIncomeTransaction;

$.ajaxSetup({
  beforeSend(xhr, options) {
    if(options.url.match(/api.parse.com/)) {
      xhr.setRequestHeader('X-Parse-Application-Id', 'V9t5d9Zdnw0iz6WwSy3jpLurWPm5Mcl1WAjWRnWm');
      xhr.setRequestHeader('X-Parse-REST-API-Key', 'SUASfh0sLbx6QVKzZgEVR6jNN1drkdV6svL8dtvA');
    }
  }
});

var date = moment()


const RecurringIncome = Backbone.Model.extend({
  idAttribute: "objectId",
  urlRoot: "https://api.parse.com/1/classes/RecurringIncomeTransaction",
  defaults: {
    name: "",
    category: "",

    startingDate: moment().toISOString(),

    endingDate: moment().toISOString(),
    frequency: 0,
    amount: 0,
    },

    toJSON(){
      var result=_.clone(this.attributes);
      result.id = result.objectId;
      delete result.objectId;
      result.date=moment(new Date (result.date)).toISOString();
      return result;
    }

});

const RecurringIncomeCollection = Backbone.Collection.extend({
  url: "https://api.parse.com/1/classes/RecurringIncomeTransaction",
  model: RecurringIncome,
  parse(response) {
    return response.results;
  }
});



export default {RecurringIncomeTransaction, RecurringIncomeCollection};
