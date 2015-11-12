import React from 'react';
import $ from 'jquery';
import fullcalendar from 'fullcalendar';
import {History} from 'react-router';
import moment from 'moment';
import range from 'moment-range'
import {Modal, Button} from 'react-bootstrap';
import { Link} from 'react-router';
import {Tabs, Tab} from 'react-bootstrap';
import store from '../store';
import BackboneMixin from '../mixins/backbone';




const Calendar = React.createClass({

  getInitialState() {
    return {
      showModal: false
    }

  },

  mixins: [History],
  componentDidMount() {
   //var Bi-weekly =  14 days from selected date
   // var Monthly = month from day selected
   //var Daily = every day from day selected to end date
   //var yearly = year from day selected




   $.ajax({
  url: "https://api.parse.com/1/functions/calendar?start=2015-11-01&end=2015-12-06",
  type: "POST",
}).then((response) =>{
  console.log(response);
  // pass the events and balances to the calendar in here
var events = response.result.transactions



    $(this.refs.calendar).fullCalendar({
      eventLimit: true, // for all non-agenda views
   views: {
       month: {
           eventLimit: 4 // adjust to 6 only for agendaWeek/agendaDay
       }
   },

   eventSources: [
       response.result.transactions,
       response.result.balances
    ],


      header: {

         left: 'title',
         center: 'month, agendaWeek, agendaDay',
         right: 'prev,next today'
      },

      selectHelper: true,
      editable: true,
      firstDay: 1,
      droppable: true,
      dropAccept: true,
     selectable: true,
     allDay: true,

      dayClick: (date) => {
        this.showModal()

      }
    });
    })
  },
showModal () {
  this.setState({showModal: true})
},

close() {
  this.setState({showModal: false})
},

mixins: [BackboneMixin],

  getModels() {
    return {
      IncomeTransactions: store.getIncomeTransactions()
    }
  },


handleSave(e) {
   e.preventDefault();
store.saveIncomeTransactions({name: this.refs.name.value, date: this.refs.date.value, amount: Number(this.refs.amount.value), category: this.refs.category.value})

  },

  handleExpense(e) {
     e.preventDefault();
  store.saveIncomeTransactions({name: this.refs.name.value, date: this.refs.date.value, amount: Number(-this.refs.amount.value), category: this.refs.category.value})

    },



  componentWillUnmount() {
    $(this.refs.calendar).fullCalendar('destroy');
  },

  render() {
var IncomeTransactions = this.state.IncomeTransactions;
    return (
      <div>
      <div className="Calendar" ref="calendar">  </div>
      <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton className="closeButton">
              <Modal.Title><h3 className="transactionModal">Transactions</h3></Modal.Title>
            </Modal.Header>
            <Modal.Body >
            <Tabs defaultActiveKey={3}>
     <Tab eventKey={1} title="Add Income" >
     <label className="nameModal-label" for="nameModal-input">Name</label>
        <input ref="name" className="nameModal-input" type="text"></input>
             <select name="select" ref="category" className="selectModal-category">
                <option>Paycheck</option>
                   <option>Transfer</option>
                      <option>Misc Income</option>
                                  </select>
            <label className="incomeModal-label" for="incomeModal-input">Amount</label>
                <input ref="amount"className="incomeModal-input" type="number"/>
                <label className="startingModal-date" for="startingModalDate">Income Start Date</label>
               <input type="date" className="startingModalDate" ref="date"></input>
               <Button  className="modalButton" onClick={this.handleSave}>Save</Button>
    </Tab>
     <Tab eventKey={2} title="Add Expense">
     <label className="nameModal-label" for="nameModal-input">Name</label>
        <input ref="name" className="nameModal-input" type="text"></input>
             <select name="select" ref="category" className="selectModal-category">
                <option>Paycheck</option>
                   <option>Transfer</option>
                      <option>Misc Income</option>
                                  </select>
            <label className="incomeModal-label" for="incomeModal-input">Amount</label>
                <input ref="amount"className="incomeModal-input" type="number"/>
                <label className="startingModal-date" for="startingModalDate">Income Start Date</label>
               <input type="date" className="startingModalDate" ref="date"></input>
               <Button  className="modalButton" onClick={this.handleExpense}>Save</Button>
     </Tab>
     <Tab eventKey={3} title="Today's Transactions">

     <ul>

     {IncomeTransactions.map((r) => {
     return (

       <li key={r.objectId}>

       <p className="nameList">{r.name}</p><p className="categoryList">{r.category}</p><p className="amountList">${r.amount.toFixed(2)}</p>
       </li>

     );

   })}
   </ul>


     </Tab>
   </Tabs>






            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>


      </div>
    );
  }
});

export default Calendar;
