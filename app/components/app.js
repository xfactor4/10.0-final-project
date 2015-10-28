import React from 'react';
import { IndexLink ,Link} from 'react-router';


var App = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },

  render() {
    return (
      <div>
        <nav className="top-bar" data-topbar role="navigation">
          <ul className="title-area">
            <li className="name">
              <h1><IndexLink to="/">Home </IndexLink></h1>
            </li>
            <li className="name"><Link to="/account">Account</Link></li>
          </ul>
        </nav>

        {this.props.children}
      </div>
    );
  }

});


export default App;
