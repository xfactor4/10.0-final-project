import React from 'react';
import $ from 'jquery';
import fullcalendar from 'fullcalendar';
import {History} from 'react-router';
import moment from 'moment';
import range from 'moment-range'



const Calendar = React.createClass({

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
      events: events,
      header: {

         left: 'prev,next today',
         center: 'title',
         right: 'month,agendaWeek,agendaDay'
      },

      selectHelper: true,
      editable: true,
      firstDay: 1,
      droppable: true,
      dropAccept: true,
     selectable: true,
     allDay: true,

      dayClick: (date) => {
        this.history.pushState(null,  '/UpdateForm/' + date.format());

      }
    });
    })
  },


  componentWillUnmount() {
    $(this.refs.calendar).fullCalendar('destroy');
  },

  render() {

    return (
      <div className="Calendar" ref="calendar">


      </div>
    );
  }
});

export default Calendar;
