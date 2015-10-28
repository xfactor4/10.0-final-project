import React from 'react';
import $ from 'jquery';
import fullcalendar from 'fullcalendar';
import {History} from 'react-router';


const Calendar = React.createClass({

  mixins: [History],
  componentDidMount() {
    $(this.refs.calendar).fullCalendar({
      header: {
         left: 'prev,next today',
         center: 'title',
         right: 'month,agendaWeek,agendaDay'
      },

      editable: true,
      firstDay: 1,
      droppable: true,
      dropAccept: true,
     selectable: true,
      dayClick: (date) => {
        this.history.pushState(null,  '/UpdateForm/' + date.format());
      }
    });
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
