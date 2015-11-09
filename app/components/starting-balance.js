import React from 'react';
import store from '../store';
import { History } from 'react-router';
import { Link} from 'react-router';
import BackboneMixin from '../mixins/backbone';


var StartingBalance = React.createClass({

    mixins: [ History ],


    getInitialState() {
      return {
        error: false
      }
    },

    getModels() {
      return {
        forecasts: store.getForecasts()
      }
    },


  handleSubmit (e) {
     e.preventDefault();

  store.saveForecast({starting_balance: Number(this.refs.bankBalance.value), name: this.refs.name.value, starting_balance_date: Date(this.refs.startingBalanceDate)})
      this.history.replaceState(null,'/fixedIncome')
    },

  render () {
    var forecasts = this.state.forecasts;
    return (
      <div className="setup-page">
  <div className="forecast-setup"><h1>FORECAST ACCOUNT SETUP</h1></div>
          <form className="SetupForm" onSubmit={this.handleSubmit}>

       <div className="form-info">
      <div className="currentBalance-box">
           <h4 className="currentBalance">INITIAL BALANCE</h4>
              <p className="input-description">1. Enter the current balance of your account.</p>
              <label className="nameLabel" for="nameAccount-input">Account Name</label>
               <input className="nameAccount-input" ref="name"  type="text" placeholder="Account Name"></input>
               <label className="amountLabel" for="bankBalance-input">Amount</label>
               <input  ref="bankBalance" className="bankBalance-input" id="bankBalance-input" type="text"></input>
               <label className="StartingBalanceDate" for="starting_balance_date">Account Balance Start Date</label>
               <input ref="starting_balance_date" className="starting_balance_date" type="date"></input>
                       <button className="initialAccountSubmit"type="submit">SUBMIT</button>
               </div>
               </div>
                <div className="form-list"></div>
               </form>

                     </div>

    )
  }
});

export default StartingBalance;
