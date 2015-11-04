import React from 'react';
import { History } from 'react-router';
import store from '../store';
import { Link} from 'react-router';



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

      var { location } = this.props

      if (location.state && location.state.nextPathname) {
        this.history.replaceState(null, location.state.nextPathname)
      } else {
        this.history.replaceState(null, '/')
      }
    })
  },

  render() {
    return (

      <div className="loginBackground">
      <form onSubmit={this.handleSubmit}>
      <h1 className="attention-graber">MAKE THE MOST OF YOUR MONEY</h1>
        <h2 className="login-title">Login</h2>
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