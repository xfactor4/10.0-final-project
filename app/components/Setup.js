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

   <li>

    <div className="setup-page">
<div className="forecast-setup"><h1>FORECAST ACCOUNT SETUP</h1></div>
        <form className="SetupForm" onSubmit={this.handleSubmit}>
     <div className="form-info">
    <div className="currentBalance-box">
         <h4 className="currentBalance">INITIAL BALANCE</h4>
            <p className="input-description">1. Enter the current balance of your account.</p>
            <label className="nameLabel" for="nameInput">Name:</label>
             <input className="nameAccount-input" id="nameInput" type="text"></input>
             <label className="amountLabel" for="bankBalance-input">Amount:</label>
             <input  ref="bankBalance" className="bankBalance-input" id="bankBalance-input" type="text"></input>
                   </div>



      <div className="incomeBalance-box">
           <h4 className="income">FIX INCOME</h4>
              <p className="input-description">1. Enter all of your fixed incomes. Example(salary, rent, etc.)</p>
                 <label className="nameIncome-label" for="nameIncome-input">Name:</label>
                    <input ref="incomeBalance" className="nameIncome-input" type="text"></input>
                         <select name="select" className="selectIncome-category">
                            <option value="selected">Paycheck</option>
                               <option>Transfer</option>
                                  <option>Misc Income</option>
                                              </select>
              <label className="incomeAmount-label" for="incomeAmount-input">Amount:</label>
                 <input ref="incomeBalance"className="incomeAmount-input" type="text"/>
                     <select name="select" className="select-frequency">
                        <option>Bi-Weekly</option>
                           <option>Monthly</option>
                              <option value="selected">Yearly</option>
                                  <option>Daily</option>
                                     <option></option>
                                         </select>
                                         <DateRangePicker></DateRangePicker>

                                            </div>

      <div className="billBalance-box">
          <h4>FIXED EXPENSE</h4>
                <p className="input-description">1. Enter all of your fixed expenses. Example(mortage, phone bill, car insurance, etc.)</p>
                <label className="nameIncome-label" for="nameIncome-input">Name:</label>
                   <input ref="billBalance" className="nameIncome-input" type="text"></input>
                        <select name="select" className="selectIncome-category">
                           <option value="selected">Paycheck</option>
                              <option>Transfer</option>
                                 <option>Misc Income</option>
                                             </select>
             <label className="incomeAmount-label" for="incomeAmount-input">Amount:</label>
                <input ref="incomeBalance"className="incomeAmount-input" type="text"/>
                    <select name="select" className="select-frequency">
                       <option>Bi-Weekly</option>
                          <option>Monthly</option>
                             <option value="selected">Yearly</option>
                                 <option>Daily</option>
                                    <option></option>
                                        </select>
                                        <DateRangePicker></DateRangePicker>
                                               <button type="submit">Enter</button>
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
