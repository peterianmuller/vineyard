import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import MainNavBar from '../components/MainNavBar';

class Home extends React.Component {

  render() {
    return (
      <div>
        <h1>Hello, e'erybody!</h1>
      </div>
    );
  }
}

export default connect(state => state)(Home);
