import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="mdl-layout__drawer">
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="/userui/home">Home</a>
          <a className="mdl-navigation__link" href="/userui/profile">Profile</a>
          <a className="mdl-navigation__link" href="/userui/logout">Log out</a>
        </nav>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Header);
