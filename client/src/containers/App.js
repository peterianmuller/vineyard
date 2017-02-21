import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import MainNavBar from '../components/MainNavBar';

class App extends React.Component {

  render() {
    return (
      <div>
        <MainNavBar /> 
        { 
          React.cloneElement(this.props.children, 
						{
							login: this.props.login,
							signup: this.props.signup,
              note: this.props.note,
              dispatch: this.props.dispatch,
              notesView: this.props.notesView,
              auth: this.props.auth
						}
					)
				}
      </div>
    );
  }
}

export default connect(state => state)(App);
