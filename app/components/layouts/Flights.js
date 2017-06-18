import React, {Component} from 'react';
import {connect} from 'react-redux';

class Flights extends Component {
  constructor(props) {
    super(props);
  }

  // TODO: this page will display a list of flights for user to
  // pick from. This page comes after (Book)

  render() {
    return (
      <h1>Flights</h1>
      // TODO: display a list of flights to pick from
      // each flight has a button to select a flight

      // once flight is selected, user is redirected to (BookingStatus)
    )
  }
}

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps)(Flights);
