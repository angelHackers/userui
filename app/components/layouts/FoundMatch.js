import React, {Component} from 'react';
import {connect} from 'react-redux';

class FoundMatch extends Component {
  constructor(props) {
    super(props);
  }

  // TODO: a profile of the person who the user got matched with

  // basically a copy of (Profile) but with the match's info

  render() {
    return (
      <h1>FoundMatch</h1>
    )
  }
}

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps)(FoundMatch);
