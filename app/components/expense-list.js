import React from "react";
import BackboneMixin from '../mixins/backbone';
import store from '../store';
import { Link} from 'react-router';




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
       <div className="listlabel"><h4 className="nameListLabel">Name</h4><h4 className="categoryListLabel">Category</h4><h4 className="amountListLabel">Amount</h4></div>
      <ul>
      {RecurringExpenseTransactions.map((r) => {
      return (
        <li key={r.objectId}>
        <p className="nameList">{r.name}</p><p className="categoryList">{r.category}</p><p className="amountExpenseList">${r.amount.toFixed(2)}</p>
        </li>

      );

    })}
    </ul>
<button className="listButton" type="submit"><Link to="/account">Enter</Link></button>
    </div>
    </div>

  )
  }

});

export default ExpenseList;
