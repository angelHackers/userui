import React, { Component } from 'react';
import { connect } from 'react-redux';

class Logout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return null;
  }
}

export default connect(null)(Logout);
