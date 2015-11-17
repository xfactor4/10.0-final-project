import React from 'react';
import { IndexLink } from 'react-router';
import store from '../store';
import BackboneMixin from '../mixins/backbone';
import $ from 'jquery';
import accordion from 'jquery';
import IncomeList from './income-list';

const Account = React.createClass ({

  mixins: [BackboneMixin],

  getModels() {
    return {
      forecasts: store.getForecasts()

    }
  },


  render () {
    var forecasts = this.state.forecasts;


    return (
      <form className="cashflow-form" onSubmit={this.handleSave}>
      <div className="incomeBalance-box">
           <h4 className="cashflow">CA$HFLOW ACCOUNT</h4>
           <ul>
           {forecasts.map((r) => {
           return (

             <li key={r.objectId}>
              <h1 className="accountName">Account Name</h1><h1 className="StartingBalance">Starting Balance</h1><h1 className="DateAccount">Starting Date of Account</h1>
             <p className="nameAccount">{r.name}</p><p className='StartBalance'>{r.starting_balance_date}</p><p className="amountAccount">${r.starting_balance}</p>

             </li>

           );

         })}
         </ul>

                                            </div>

                                        </form>



    )
  }
});

export default Account;
