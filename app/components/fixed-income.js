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


handleSubmit (e) {
   e.preventDefault();

store.saveRecurringIncomeTransactions({name: this.refs.name.value, startingDate: Date(this.refs.startingDate.value), endingDate:Date( this.refs.endingDate.value), frequency: Number(this.refs.frequency.value), amount: Number(this.refs.amount.value), category: this.refs.category.value})
this.history.replaceState(null,'/fixedExpenses')
  },

  render (){
    var RecurringIncomeTransactions = this.state.RecurringIncomeTransactions;
    return(
     <div className="income-list">
      <form className="SetupForm" onSubmit={this.handleSubmit}>
      <div className="incomeBalance-box">
           <h4 className="income">FIX INCOME</h4>
              <p className="input-description">1. Enter all of your fixed incomes for the account. Example(salary, rent, etc.)</p>
                 <label className="nameIncome-label" for="nameIncome-input">Name:</label>
                    <input ref="name" className="nameIncome-input" type="text"></input>
                         <select name="select" ref="category" className="selectIncome-category">
                            <option>Paycheck</option>
                               <option>Transfer</option>
                                  <option>Misc Income</option>
                                              </select>
              <label className="incomeAmount-label" for="incomeAmount-input">Amount:</label>
                 <input ref="amount"className="incomeAmount-input" type="text"/>
                     <select ref="frequency" name="select" className="select-frequency">
                        <option>7</option>
                           <option>Monthly</option>
                              <option value="selected">Yearly</option>
                                  <option>Daily</option>
                                     <option></option>
                                         </select>
                                         <input type="date" ref="startingDate"></input>
                                         <input type="date" ref="endingDate"></input>
                                               <button type="submit">Enter</button>
                                            </div>
                                        </form>
                 <IncomeList/>
                 </div>
    )
  }
});

export default FixedIncome;
