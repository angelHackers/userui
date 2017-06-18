import React, {Component} from 'react';
import {connect} from 'react-redux';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Profile</h1>
    )
  }
}

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps)(Profile);
