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

store.saveRecurringExpenseTransactions({name: this.refs.name.value, startingDate: Date(this.refs.startingDate.value), endingDate:Date( this.refs.endingDate.value), frequency: Number(this.refs.frequency.value), amount: Number(-this.refs.amount.value), category: this.refs.category.value})

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
                            <option>Paycheck</option>
                               <option>Transfer</option>
                                  <option>Misc Income</option>
                                              </select>
              <label className="expenseAmount-label" for="incomeAmount-input">Amount</label>
                 <input ref="amount"className="expenseAmount-input" type="text"/>
                     <select ref="frequency" name="select" className="selectExpense-frequency">
                        <option>7</option>
                           <option>Monthly</option>
                              <option value="selected">Yearly</option>
                                  <option>Daily</option>
                                     <option></option>
                                         </select>
                                         <label className="startingExpense" for="startingExpenseDate">Expense Start Date</label>
                                         <input className="startingExpenseDate" type="date" ref="startingDate"></input>
                                         <label className="endingExpense" for="endingExpenseDate">Expense End Date</label>
                                         <input className="endingExpenseDate" type="date" ref="endingDate"></input>
                                               <button className="SaveExpense" type="submit">Enter</button>
                                            </div>
                                        </form>
                                        <ExpenseList/>
                                        </div>



    )
  }
});

export default FixedExpenses;
