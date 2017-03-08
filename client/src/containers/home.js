//React requirements
import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import WeatherSummary from '../components/weatherSummary';
import { Button, Divider, Item, Grid, Form } from 'semantic-ui-react';

import { setHomeLocation } from '../actions/homeView';

import axios from 'axios'

//Components
import MainNavBar from '../components/MainNavBar';

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
        org_info: res.data
      }

      window.localStorage.setItem('vineyards', JSON.stringify(vineyards));
    })
    .catch((err)=> {
      console.log(err);
    })
  };

  render() {
    console.log(JSON.parse(window.localStorage.getItem('vineyards')), 'local')
    return (
     <Grid columns={16}>
        <Grid.Column width={4}>
          <h1>Alerts</h1>
          <p>IPhone yuccie health goth helvetica man bun. 
          Poutine intelligentsia chartreuse ennui, celiac readymade microdosing. 
          Chicharrones pitchfork chambray, la croix readymade gentrify mixtape. Blog you probably haven't 
          heard of them narwhal biodiesel literally. Ethical fap venmo bespoke bicycle rights, 
          pinterest chia PBR&B gentrify. Neutra cronut fam squid lomo pitchfork hashtag. 
          Raw denim poke small batch polaroid 
          umami roof party schlitz, post-ironic shoreditch.</p>
        </Grid.Column>
        <Grid.Column width={4}>
          <h1>Basic Data Setup</h1> 
          <p>Disrupt green juice deep v ethical shabby chic, 
          kogi hella flexitarian prism letterpress. 
          Keffiyeh photo booth blue bottle drinking vinegar, 
          hella man braid biodiesel food truck lyft poke post-ironic. 
          Af hashtag ennui, air plant hot chicken freegan 
          DIY mustache biodiesel snackwave hell of kogi single-origin coffee literally. 
          Vice freegan art party, helvetica unicorn authentic normcore blue bottle pinterest 
          lomo humblebrag man braid. Semiotics tattooed chambray, pok pok hell of before they sold out offal. 
          +1 fixie normcore, drinking vinegar man braid listicle cardigan waistcoat XOXO meh. 
          Art party chillwave yuccie keffiyeh, bitters deep v before they sold out.</p>
       </Grid.Column>
       <Grid.Column width={4}>
         <h1>Weather summary</h1>
           <WeatherSummary dispatch={this.props.dispatch} temperature={this.props.homePage.temperature} humditiy={this.props.humidity} homePage={this.props.homePage}/>
       </Grid.Column>
    </Grid>
    );
  }
}

export default connect(state => state)(Home);
