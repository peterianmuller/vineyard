//React requirements
import React from 'react';
import { connect } from 'react-redux';
import store from '../store';

//UI
import { Segment, Sidebar } from 'semantic-ui-react';

//Components
import MainNavBar from '../components/MainNavBar';
import LeftSideBar from '../components/LeftSideBar';

//Actions
import { validateUser } from '../actions/navigation';

//Stylesheets
import Radium from 'radium';
import styles from '../styles/AppStyles.js';

@connect(state => state)
@Radium
export default class App extends React.Component {
  render() {
    return (
      <Sidebar.Pushable as={Segment}>
        <LeftSideBar 
          dispatch={this.props.dispatch} 
          nav={this.props.nav} 
          auth={this.props.authStatus} />

        <Sidebar.Pusher>
          <MainNavBar dispatch={this.props.dispatch} auth={this.props.authStatus} /> 
          { 
            React.cloneElement(this.props.children, 
	  		  	  {
                auth: this.props.authStatus,
                dispatch: this.props.dispatch,
	  		  	  	login: this.props.login,
                messages: this.props.messages,
                note: this.props.note,
                notesView: this.props.notesView,
                orgSignup: this.props.orgSignup,
                rooms: this.props.rooms,
	  		  	  	signup: this.props.signup,
                homePage: this.props.homePage,
                mapHome: this.props.mapHome,
                dataForm: this.props.dataForm,
                dataArray: this.props.dataArray,
                mapVis: this.props.mapVis
	  		  	  }
	  		    )
	  	    }
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

//export default connect(state => state)(App);
