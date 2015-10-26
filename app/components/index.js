import React from 'react';
import Calendar from './calendar';

var Index = React.createClass({
  render() {
    return (
      <div>
      <form>
      <input type="number" />
      <input type="submit"/>
      <input type="text"/>
      </form>
      <Calendar/>
      </div>
    );
  }

});

export default Index;
