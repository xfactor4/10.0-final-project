import React from 'react';
import $ from 'jquery';
import fullcalendar from 'fullcalendar';

const Calendar = React.createClass({
  componentDidMount() {
    $(this.refs.calendar).fullCalendar({
      editable: true,
      firstDay: 1,
      droppable: true
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
