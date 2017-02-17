import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import MainNavBar from '../components/MainNavBar';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <MainNavBar /> 
        { React.cloneElement(this.props.children, 
						{
							login: this.props.login,
							signup: this.props.signup
						}
					)
				}
      </div>
    );
  }
}

export default connect(state => state)(App);
