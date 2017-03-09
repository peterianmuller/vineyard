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
      <div style={styles.flexbox}>
        <div style={styles.leftSideBar}>
          <LeftSideBar 
            dispatch={this.props.dispatch} 
            nav={this.props.nav} 
            auth={this.props.authStatus} />
        </div>

        <div style={styles.innerCol}>
          <MainNavBar weather={this.props.homePage} 
            dispatch={this.props.dispatch}
            auth={this.props.authStatus}
          /> 
          { 
            React.cloneElement(this.props.children, 
	  		  	  {
                auth: this.props.authStatus,
                dataArray: this.props.dataArray,
                dataForm: this.props.dataForm,
                dispatch: this.props.dispatch,
                homePage: this.props.homePage,
	  		  	  	login: this.props.login,
                mapHome: this.props.mapHome,
                mapVis: this.props.mapVis,
                messages: this.props.messages,
                note: this.props.note,
                notesView: this.props.notesView,
                orgSignup: this.props.orgSignup,
                polygons: this.props.polygons,
                rooms: this.props.rooms,
	  		  	  	signup: this.props.signup,
	  		  	  }
	  		    )
	  	    }
        </div>
      </div>
    );
  }
}
