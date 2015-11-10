import React from "react";
import BackboneMixin from '../mixins/backbone';
import store from '../store';




const ExpenseList = React.createClass({

mixins: [BackboneMixin],



getModels() {
  return {
    RecurringExpenseTransactions: store.getRecurringExpenseTransactions()
  }
},

  render () {
    var RecurringExpenseTransactions = this.state.RecurringExpenseTransactions;
    return (
    <div className="IncomeListSetupForm" onSubmit={this.handleSubmit}>
        <div className="incomeList-box">
      <h4 className="incomeList">Fixed Expense List</h4>
      <ul>
      {RecurringExpenseTransactions.map((r) => {
      return (
        <li key={r.objectId || Date.now()}>
        <h1>{r.name}{r.amount}{r.category}</h1>
        </li>

      );

    })}
    </ul>

    </div>
    </div>

  )
  }

});

export default ExpenseList;
