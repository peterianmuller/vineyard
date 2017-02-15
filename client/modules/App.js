import React from 'react';
import { connect } from 'react-redux';
import store from '../store';

export default class App extends React.Component {
  
  render() {
    return (
      <div>
        <h1>It renders</h1>
      </div>
    );
  }
}

//export default connect(state => state)(App);
