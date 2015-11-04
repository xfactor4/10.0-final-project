import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

let forecasts;

$.ajaxSetup({
  beforeSend(xhr, options) {
    if(options.url.match(/api.parse.com/)) {
      xhr.setRequestHeader('X-Parse-Application-Id', 'V9t5d9Zdnw0iz6WwSy3jpLurWPm5Mcl1WAjWRnWm');
      xhr.setRequestHeader('X-Parse-REST-API-Key', 'SUASfh0sLbx6QVKzZgEVR6jNN1drkdV6svL8dtvA');
    }
  }
});

const Forecast = Backbone.Model.extend({
  idAttribute: "objectId",
  urlRoot: "https://api.parse.com/1/classes/Forecast",
  defaults: {
      balance: 0,
      income: 0,
      bill: 0,
      totalbalance: 0,

    },

    toJSON(){
      var result=_.clone(this.attributes);
      result.id = result.objectId;
      delete result.objectId;
      return result;
    }

});

const ForecastCollection = Backbone.Collection.extend({
  url: "https://api.parse.com/1/classes/Forecast",
  model: Forecast,
  parse(response) {
    return response.results;
  }
});



export default {Forecast, ForecastCollection};
