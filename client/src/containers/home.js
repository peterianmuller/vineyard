
//React requirements
import React from 'react';
import { connect } from 'react-redux';
import store from '../store';

//UI
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

//Components
import HomeCard from '../components/HomeCard';
import MainNavBar from '../components/MainNavBar';
import WeatherSummary from '../components/weatherSummary';

//Actions
import { setHomeLocation } from '../actions/homeView';

//Styles
import styles from '../styles/HomeStyles';
class Home extends React.Component {
 
  componentDidMount(){
    // here set lat and lng of home page so we can set the userMap to that if we want
    
    this.testOrgs(); 
    // make api call to /organization/data to set 
    console.log('do I get here?');
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => { 
        var lat = coords.latitude;
        var lng = coords.longitude; 
        this.props.dispatch(setHomeLocation({lat:lat, lng:lng}));
    })   
  }

  testOrgs() {
    console.log('test orgs running')
    axios.get('/api/organization/information', {
      headers: {
        'Authorization': 'JWT ' + localStorage.getItem('token')  
      },
      params: {
        name: this.props.auth.username
      }
    })  
    .then((res) => {
      //here save vinyard name to local storage
      console.log('this is the result from the axios call: ', res.data);
      var vineyards = {
        vineyards: res.data.vineyards
      }
      var org_info = {
        orgs: res.data
      }

      window.localStorage.setItem('vineyards', JSON.stringify(vineyards));
      window.localStorage.setItem('orgs', JSON.stringify(org_info));
    })
    .catch((err)=> {
      console.log(err);
    })
  };

class Home extends React.Component {
 
  componentDidMount(){
    // here set lat and lng of home page so we can set the userMap to that if we want
    var context = this;
    console.log(context);
    this.testOrgs(); 
    // make api call to /organization/data to set 
    console.log('do I get here?');
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => { 
        var lat = coords.latitude;
        var lng = coords.longitude; 
        context.props.dispatch(setHomeLocation({lat:lat, lng:lng}));
    })   
  }

  testOrgs() {
    var context;
    console.log('test orgs running')
    axios.get('/api/organization/information', {
      headers: {
        'Authorization': 'JWT ' + localStorage.getItem('token')  
      },
      params: {
        name: context.props.auth.username
      }
    })  
    .then((res) => {
      //here save vinyard name to local storage
      console.log('this is the result from the axios call: ', res.data);
      var vineyards = {
        vineyards: res.data.vineyards
      }
      var org_info = {
        orgs: res.data
      }
      window.localStorage.setItem('vineyards', JSON.stringify(vineyards));
      window.localStorage.setItem('orgs', JSON.stringify(org_info));
    })
    .catch((err)=> {
      console.log(err);
    })
  }

  render() {
    //console.log(JSON.parse(window.localStorage.getItem('vineyards')), 'local')
    return (

      <div style={styles.flexBox}>
        <div style={ { flexDirection: 'column', justifyContent: 'space-between', alignContent: 'space-between', flex: '1 auto' } }>
          <HomeCard title='Notes' />
          <HomeCard title='Data' />
        </div>
      </div>
    );
  }
}

