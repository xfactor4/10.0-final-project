import React from 'react';
import { IndexLink } from 'react-router';
import store from '../store';
import BackboneMixin from '../mixins/backbone';
import $ from 'jquery';
import accordion from 'jquery';
import Calendar from './calendar';
import DateRangePicker from './daterangepicker';




var Setup = React.createClass({

propTypes: {
  isNew: React.PropTypes.bool,
  onAdd: React.PropTypes.func
},

mixins: [BackboneMixin],

getModels() {
  return {
    forecasts: store.getForecasts()
  }
},

 handleSubmit (e) {
    e.preventDefault();
     store.saveForecast({
      balance: this.refs.bankBalance.value,
      income: this.refs.incomeBalance.value,
      bill: this.refs.billBalance.value,
      totalbalance: (parseInt(this.refs.bankBalance.value) +  parseInt(this.refs.incomeBalance.value)- parseInt(this.refs.billBalance.value)).toString(),
    })
  },






  render() {

  var forecasts = this.state.forecasts;
  console.log(this.state.forecasts)

    return (

   <ul>
{forecasts.map((x) =>{
  return (<Calendar key={x.objectId} forecast={x} />)

})}

</ul>





        );


    }
  });





export default Setup;
