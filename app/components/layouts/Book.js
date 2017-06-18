import React, {Component} from 'react';
import {connect} from 'react-redux';

class Book extends Component {
  constructor(props) {
    super(props);
  }

  // TODO: this is the page where we will be display a form
  // hooked to Amadeus's API to allow users to book flights

  // to book a flight, user will need to provide:
  // - one-way/round-trip
  // - FROM
  // - TO
  // - DATE

  // and a button to book the flight
  // this button should redirect the user to a list of flights to
  // pick from (Flights)

  render() {
    return (
      <h1>Book</h1>
    )
  }
}

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps)(Book);
