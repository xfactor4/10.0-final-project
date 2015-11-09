import React from "react";
import BackboneMixin from '../mixins/backbone';
import store from '../store';




const IncomeList = React.createClass({

mixins: [BackboneMixin],



getModels() {
  return {
    RecurringIncomeTransactions: store.getRecurringIncomeTransactions()
  }
},

  render () {
    var RecurringIncomeTransactions = this.state.RecurringIncomeTransactions;
    return (
    <div className="IncomeListSetupForm" onSubmit={this.handleSubmit}>
        <div className="incomeList-box">
      <h4 className="incomeList">Fixed Income List</h4>
      <ul>
      {RecurringIncomeTransactions.map((r) => {
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

export default IncomeList;
