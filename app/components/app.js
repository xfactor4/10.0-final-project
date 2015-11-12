import React from 'react';
import { IndexLink ,Link} from 'react-router';
import BackboneMixin from '../mixins/backbone';
import store from '../store';


var App = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },

  mixins: [BackboneMixin],

  getModels() {
    return {
      session: store.getSession()
    }
  },

  handleLogout(e) {
    e.preventDefault();
    store.invalidateSession();
  },

  render() {
 let session = this.state.session;
 let loggedIn = session.isAuthenticated;
 let currentUser = session.currentUser;
 let username = (currentUser && currentUser.username) || 'Me';

    return (
      <div>
        <nav className="top-bar" data-topbar role="navigation">
          <ul className="title-area">
            <li className="home"><IndexLink to="/">HOME </IndexLink></li>
            <li className="account"><Link to="/account">ACCOUNT</Link></li>
              <button type="submit" className="signup"><Link to="/signup">SIGN UP</Link></button>
          </ul>



                      <ul className="right">
                            {loggedIn &&
                            <li className="has-dropdown">
                              <a className="username">{username}</a>
                              <ul className="dropdown">
                                <li className="dashboard"><Link to="/profile">DASHBOARD</Link></li>
                                <li className="logout"><a onClick={this.handleLogout}>Logout</a></li>
                              </ul>
                            </li>
                            }
                          </ul>
        </nav>



        {this.props.children}
      </div>

    );
  }

});


export default App;
