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
      <div>
      <h1>Fixed Income List</h1>
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
  )
  }

});

export default IncomeList;
