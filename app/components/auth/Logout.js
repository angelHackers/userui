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

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps)(Logout);
