import React from 'react';
import DateRangePicker from './daterangepicker';
import store from '../store';
import { History } from 'react-router';
import { Link} from 'react-router';
import BackboneMixin from '../mixins/backbone';
import IncomeList from './income-list';

var FixedIncome = React.createClass({


  mixins: [ History ],


  getInitialState() {
    return {
      error: false
    }
  },

  getModels() {
    return {
      RecurringIncomeTransactions: store.getRecurringIncomeTransactions()
    }
  },


handleSave (e) {
   e.preventDefault();

store.saveRecurringIncomeTransactions({name: this.refs.name.value, startingDate: (this.refs.startingDate.value), endingDate: ( this.refs.endingDate.value), frequency: Number(this.refs.frequency.value), amount: Number(this.refs.amount.value), category: this.refs.category.value})

  },





  render (){
    var RecurringIncomeTransactions = this.state.RecurringIncomeTransactions;
    return(

     <div className="income-list">
           <div className="forecast-setup"><h1>FORECAST ACCOUNT SETUP</h1></div>
      <form className="IncomeSetupForm" onSubmit={this.handleSave}>
      <div className="incomeBalance-box">
           <h4 className="income">FIX INCOME</h4>
              <p className="income-description">1. Enter all of your fixed incomes for the account. Example(salary, rent, etc.)</p>
                 <label className="nameIncome-label" for="nameIncome-input">Name</label>
                    <input ref="name" className="nameIncome-input" type="text"></input>
                         <select name="select" ref="category" className="selectIncome-category">
                            <option>Paycheck</option>
                               <option>Transfer</option>
                                  <option>Misc Income</option>
                                              </select>
              <label className="incomeAmount-label" for="incomeAmount-input">Amount</label>
                 <input ref="amount"className="incomeAmount-input" type="text"/>
                     <select ref="frequency" name="select" className="select-frequency">
                        <option>7</option>
                           <option>30</option>
                              <option value="selected">Yearly</option>
                                  <option>14</option>
                                     <option></option>
                                         </select>
                                          <label className="StartIncome" for="startingIncomeDate">Income Start Date</label>
                                         <input type="date" className="startingIncomeDate" ref="startingDate"></input>
                                         <label className="EndIncome" for="endingIncomeDate">Income End Date</label>
                                         <input type="date" className="endingIncomeDate" ref="endingDate"></input>
                                               <button className="SaveIncome" type="submit">Save</button>
                                            </div>

                                        </form>
                 <IncomeList/>
                 </div>
    )
  }
});

export default FixedIncome;
