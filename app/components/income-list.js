import React from "react";
import BackboneMixin from '../mixins/backbone';
import store from '../store';
import { Link} from 'react-router';




const IncomeList = React.createClass({

mixins: [BackboneMixin],



getModels() {
  return {
    RecurringIncomeTransactions: store.getRecurringIncomeTransactions()
  }
},

handleSubmit (e) {
  e.preventDefault();
},

handleDestroy(e) {
    e.preventDefault();
    if(confirm("Are you sure?")){
      store.destroyRecurringIncomeTransactions(this.state.RecurringIncomeTransactions).then(() => {
        this.history.replaceState(null, '/');
      });
    }
  },



  render () {
    var RecurringIncomeTransactions = this.state.RecurringIncomeTransactions;
    return (
    <div className="IncomeListSetupForm" onSubmit={this.handleSubmit}>
        <div className="incomeList-box">
      <h4 className="incomeList">Fixed Income List</h4>
           <div className="listlabel"><h4 className="nameListLabel">Name</h4><h4 className="categoryListLabel">Category</h4><h4 className="amountListLabel">Amount</h4></div>
      <ul>
      {RecurringIncomeTransactions.map((r) => {
      return (

        <li key={r.objectId}>

        <p className="nameList">{r.name}</p><p className="categoryList">{r.category}</p><p className="amountList">${r.amount.toFixed(2)}</p>
      
        </li>

      );

    })}
    </ul>
<button className="listButton" type="submit"><Link to="/fixedExpenses">Enter</Link></button>

    </div>
    </div>


  )
  }

});

export default IncomeList;
