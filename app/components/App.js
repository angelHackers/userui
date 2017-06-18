import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './layouts/Header';

export default class App extends Component {
  render() {
    return (
      <div className="app_layout">
        <div className="demo-layout-transparent mdl-layout mdl-js-layout logo">
          <Header />
          <main className="mdl-layout__content">
          {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};
