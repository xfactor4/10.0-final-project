import React from 'react';
import $ from 'jquery';
import fullcalendar from 'fullcalendar';
import {History} from 'react-router';
import moment from 'moment';
import range from 'moment-range'
import {Modal, Button} from 'react-bootstrap';




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


  var forecast = this.props.forecast;
   var start = moment(forecast.createdAt);
   var end = moment(forecast.createdAt).add(6, 'months');
   var range = moment.range(start, end);
   var totalDistance = range.diff('days');

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
      events: events,
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

  componentWillUnmount() {
    $(this.refs.calendar).fullCalendar('destroy');
  },

  render() {

    return (
      <div>
      <div className="Calendar" ref="calendar">  </div>
      <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton className="closeButton">
              <Modal.Title><h4 className="transactionModal">Transactions</h4></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Text in a modal</h4>


              <hr />


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
