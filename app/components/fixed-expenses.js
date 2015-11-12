import React from 'react';
import DateRangePicker from './daterangepicker';
import store from '../store';
import { History } from 'react-router';
import { Link} from 'react-router';
import BackboneMixin from '../mixins/backbone';
import ExpenseList from './expense-list';

var FixedExpenses = React.createClass({

  mixins: [ History ],


  getInitialState() {
    return {
      error: false
    }
  },

  getModels() {
    return {
      RecurringExpenseTransactions: store.getRecurringExpenseTransactions()
    }
  },


handleSubmit (e) {
   e.preventDefault();

store.saveRecurringExpenseTransactions({name: this.refs.name.value, startingDate: (this.refs.startingDate.value), endingDate: ( this.refs.endingDate.value), frequency: Number(this.refs.frequency.value), amount: Number(-this.refs.amount.value), category: this.refs.category.value})

  },

  render (){
    var RecurringExpenseTransactions = this.state.RecurringExpenseTransactions;
    return(
<div className="income-list">
      <div className="forecast-setup"><h1>FORECAST ACCOUNT SETUP</h1></div>
      <form className="ExpenseSetupForm" onSubmit={this.handleSubmit}>
      <div className="expenseBalance-box">
           <h4 className="expense">FIX EXPENSES</h4>
              <p className="expense-description">1. Enter all of your fixed incomes for the account. Example(salary, rent, etc.)</p>
                 <label className="nameExpense-label" for="nameExpense-input">Name</label>
                    <input ref="name" className="nameExpense-input" type="text"></input>
                         <select name="select" ref="category" className="selectExpense-category">
                            <option>Auto & Transport</option>
                               <option>Bills & Utilities</option>
                                  <option>Business Servies</option>
                                  <option>Education</option>
                                  <option>Entertainment</option>
                                  <option>Fees & charges</option>
                                  <option>Financial</option>
                                  <option>Food & Dinning</option>
                                  <option>Gas & Fuel</option>
                                  <option>Gifts & Donations</option>
                                  <option>Health & Fitness</option>
                                  <option>Home</option>
                                  <option>Investments</option>
                                  <option>Kids</option>
                                  <option>Medical</option>
                                  <option>Misc Expense</option>
                                  <option>Personal Care</option>
                                  <option>Pets</option>
                                  <option>Shopping</option>
                                  <option>Taxes</option>
                                  <option>Travel</option>
                                              </select>
              <label className="expenseAmount-label" for="incomeAmount-input">Amount</label>
                 <input ref="amount"className="expenseAmount-input" type="text"/>
                     <select ref="frequency" name="select" className="selectExpense-frequency">
                        <option>7</option>
                           <option>14</option>
                              <option value="selected">Yearly</option>
                                  <option>30</option>
                                     <option></option>
                                         </select>
                                         <label className="startingExpense" for="startingExpenseDate">Expense Start Date</label>
                                         <input className="startingExpenseDate" type="date" ref="startingDate"></input>
                                         <label className="endingExpense" for="endingExpenseDate">Expense End Date</label>
                                         <input className="endingExpenseDate" type="date" ref="endingDate"></input>
                                               <button className="SaveExpense" type="submit">Save</button>
                                            </div>
                                        </form>
                                        <ExpenseList/>
                                        </div>



    )
  }
});

export default FixedExpenses;
