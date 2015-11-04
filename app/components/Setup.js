import React from 'react';
import { IndexLink } from 'react-router';
import store from '../store';
import BackboneMixin from '../mixins/backbone';
import $ from 'jquery';
import accordion from 'jquery';
import Calendar from './calendar';



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

   <li>

    <div className="setup-page">
<div className="forecast-setup"><h1>FORECAST ACCOUNT SETUP</h1></div>
        <form className="SetupForm" onSubmit={this.handleSubmit}>
     <div className="form-info">

    <div className="currentBalance-box">
         <h4 className="currentBalance">Initial Balance</h4>
             <input  ref="bankBalance" className="bankBalance-input" type="text"/>
                   </div>



      <div className="incomeBalance-box">
           <h4 className="income">Income</h4>
                 <input ref="incomeBalance"className="incomeAmount" type="text"/>
                     <select name="select" className="select-frequency">
                        <option>Bi-Weekly</option>
                           <option>Monthly</option>
                              <option value="selected">Yearly</option>
                                  <option>Daily</option>
                                     <option></option>
                                         </select>
                                            </div>

      <div className="billBalance-box">
          <h4>Starting Pay Date</h4>
                <h4 className="bills">Expenses</h4>
                <input ref="billBalance" className="billAmount" type="text"/>
                     <select name="select" className="Frequency">
                        <option>Bi-Weekly</option>
                            <option>Monthly</option>
                              <option value="selected">Yearly</option>
                                 <option>Daily</option>
                                      <option></option>
                                           </select>
                                               <input type="date" className="datepicker"/>
                                                     </div>


         

              </div>

    </form>


   <ul>
{forecasts.map((x) =>{
  return (<Calendar key={x.objectId} forecast={x} />)

})}

</ul>
    </div>

          </li>


        );


    }


});


export default Setup;
