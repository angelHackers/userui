import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookingStatus extends Component {
  constructor(props) {
    super(props);
  }

  // This will show the status of the booking process
  // This page will have a button to get user matched
  // with another passenger

  render() {
    return (
      <h1>BookingStatus</h1>
    )
  }
}

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps)(BookingStatus);
