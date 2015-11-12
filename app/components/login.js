import React from 'react';
import { History } from 'react-router';
import store from '../store';
import { Link} from 'react-router';
var DriveIn = require('react-drive-in');
var $mountNode = document.getElementById('drive-in');



const Login = React.createClass({

  propTypes: {
    location: React.PropTypes.object

  },

  mixins: [ History ],

  getInitialState() {
    return {
      error: false
    }
  },

  handleSubmit(event) {
    event.preventDefault()

    let username = this.refs.email.value
    let password = this.refs.password.value

    store.authenticateSession({username, password}).then((loggedIn) => {
      if (!loggedIn)
        return this.setState({ error: true })

        this.history.replaceState(null, '/startingBalance')
    })
  },

  render()
  {
    return (



      <div className="loginBackground">
      <form onSubmit={this.handleSubmit}>
      <h1 className="appTitle">CA$HFLOW</h1>
        <h2 className="attention-graber">MAKE EVERY DOLLAR COUNT</h2>
        <input ref="email" type="email" className="login-email" placeholder="email" />
        <input type="password" ref="password" className="login-password" placeholder="password" />
        <button type="submit" className="login-button">LOGIN</button>
        <button type="submit" className="signup-button"><Link to="/signup">GET STARTED NOW</Link></button>
        {this.state.error && (
          <p>Bad login information</p>
        )}
      </form>
    <div className="header-overlay"></div>
 </div>



    )
  }
})

export default Login;
