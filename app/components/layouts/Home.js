import React, {Component} from 'react';
import {connect} from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  // TODO: this is where we will be displaying a list of flights the users
  // currently booked for

  // this page will also have a button to book your next fight

  render() {
    return (
      <h1>Home</h1>
      // TODO: display list of booked Flights
      // TODO: display a button to direct to "book-a-flight" (Book) page
    )
  }
}

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps)(Home);
