import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import MainNavBar from '../components/MainNavBar';
import { validateUser } from '../actions/navigation';

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(validateUser());
  }

  render() {
    return (
      <div>
        <MainNavBar dispatch={this.props.dispatch} auth={this.props.authStatus} /> 
        { 
          React.cloneElement(this.props.children, 
						{
							login: this.props.login,
							signup: this.props.signup,
              note: this.props.note,
              dispatch: this.props.dispatch,
              notesView: this.props.notesView,
              auth: this.props.authStatus
						}
					)
				}
      </div>
    );
  }
}

export default connect(state => state)(App);
