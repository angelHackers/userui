import React, {Component} from 'react';
import {connect} from 'react-redux';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>MAIN</h1>
    )
  }
}

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps)(Main);
