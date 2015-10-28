import React from 'react';
import { IndexLink } from 'react-router';
import {Account, SetupCollection} from '../store';

var Setup = React.createClass({

  handleSubmit (e) {
    e.preventDefault();
    var account = new Account({
      balance: this.refs.bankBalance.value,
      income: this.refs.incomeBalance.value,
      bill: this.refs.billBalance.value
    })
    account.save()

  },

  render() {
    return (

   <li>
      <div className="account">
      <form className="SetupForm" onSubmit={this.handleSubmit}>
      <fieldset>
      <h4 className="currentBalance">Current Bank Balance</h4><input  ref="bankBalance" className="howmuch" type="text"/>
      <h4 className="income">Income</h4><input ref="incomeBalance" className="incomeAmount" type="text"/>
      <select name="select" className="Frequency">
        <option>Bi-Weekly</option>
        <option>Monthly</option>
        <option value="selected">Yearly</option>
        <option>Daily</option>
        <option></option>
      </select>
<h4>Starting Pay Date<input type="date" id="datepicker"/></h4>
<h4 className="bills">Bill</h4><input ref="billBalance" className="billAmount" type="text"/>
<select name="select" className="Frequency">
  <option>Bi-Weekly</option>
  <option>Monthly</option>
  <option value="selected">Yearly</option>
  <option>Daily</option>
  <option></option>
</select>
<h4>Starting Bill Date<input type="date" id="datepicker"/></h4>
    <button type="submit" className="adjust">Enter</button>
    </fieldset>
    </form>
<div className="box">

</div>
    </div>
    </li>


        );


    }


});

export default Setup;
