//React requirements
import React from 'react';
import axios from 'axios';


//Actions and Functions
import { setLatLong } from '../helpers/changeHandlers';
import { setNoteFormItem } from '../actions/noteForm';

import { Button } from 'semantic-ui-react';

import { setHomeLocation } from '../actions/homeView';


export default class Map extends React.Component {
  constructor(props) {
    super(props);
  };

  updateHomeLocationBtn(e){
    e.preventDefault();    
    //get address here
    var context = this;
    console.log('this is props inside updateHomeLocationBtn:', context.props);

    console.log('is this the address id? ', JSON.parse(window.localStorage.getItem('orgs')).orgs.address_id);
    // have the address id, send axios 
    axios.get('/api/address', {
      params: {
        id: JSON.parse(window.localStorage.getItem('orgs')).orgs.address_id
      },
      headers: {
        'Authorization': 'JWT ' + localStorage.getItem('token') 
      }
    })  
    .then((response) => {
      console.log('response is', response);
      var address = response.data.street + ' ' + response.data.city + ' ' + response.data.state + ' ' + response.data.zip;

      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address': address}, function(results, status){

        if (status === google.maps.GeocoderStatus.OK) {
          var latitude = results[0].geometry.location.lat();
          var longitude = results[0].geometry.location.lng();
          context.props.dispatch(setHomeLocation({lat:latitude, lng:longitude}));
        }
      })
        this.createMap();
      //console.log('this.createMap is:', this.createMap);
    }) 
    .catch((err) => {
      console.log(err);
    })


  }

  showMap(e){
    e.preventDefault();
    this.createMap();
  }

    //setNoteFormItem = setNoteFormItem.bind(this);
        //<Button onClick={this.showMap.bind(this)}>Update homePage location</Button>


  render() {
    return (
      <div>
        <div id='googleMaps' style = {{'margin': '0 auto', 'height': '40%', 'width': '50%', 'borderRadius': '3px' }}>
        </div>
        <div id="current" style={{'paddingTop': '25px'}}>Please move the note to a location</div>
        <Button onClick={this.updateHomeLocationBtn.bind(this)}>Go to Vineyard</Button>
      </div> 
  )};

  
  componentDidMount() {
    console.log('inside componentDidMount');
    //console.log('is this the address id? ', JSON.parse(window.localStorage.getItem('orgs')).orgs.address_id);
    //
    //console.log('this.props is: ', this.props);
    this.createMap();
  };

  createMap() {
    var context = this;
    console.log('this.props inside createMap is ', this.props);

    //JSONP request for map  
    (function fetchMap() {
      window.initMap = initMap;
      var script = window.document.createElement('script');
      var ref = window.document.getElementsByTagName('script')[0];
      script.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyCBb0bm-_wNIf3oDMi-5PN_zeOf1bRWstI&libraries=places&callback=initMap';
      ref.parentNode.insertBefore(script, ref);
      script.onload = function() {
        this.remove();
      };
    })();  


    function initMap() {
      //console.log('this.props is', this.props);
      //var context = this;
      console.log('context.props', context.props);
      var styleArray = [
         {
          featureType: "poi",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        }
      ];
      //need to get current coordinates to center map where user is at
        //navigator is async, so we can only access these coords inside the 
      navigator.geolocation.getCurrentPosition(function(pos){
        var lat,lng
        if (!context.props.homePage.lat) {
          lat = pos.coords.latitude;
          lng = pos.coords.longitude;
        } else {
          lat = context.props.homePage.lat;
          lng = context.props.lng;
        }
        var map = new google.maps.Map(document.getElementById('googleMaps'), {

          //able to get the location of the homepage
          //if this updates, will map re-render?

          center: { lat: lat, lng: lng },
          zoom: 19,
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
          styles: styleArray
        });


        function CenterControl(controlDiv, map) {

          // Set CSS for the control border.
          var controlUI = document.createElement('div');
          controlUI.style.backgroundColor = '#fff';
          controlUI.style.border = '2px solid #fff';
          controlUI.style.borderRadius = '3px';
          controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
          controlUI.style.cursor = 'pointer';
          controlUI.style.marginBottom = '22px';
          controlUI.style.textAlign = 'right';
          controlUI.title = 'Click to recenter the map';
          controlDiv.appendChild(controlUI);

          // Set CSS for the control interior.
          var controlText = document.createElement('div');
          controlText.style.color = 'rgb(25,25,25)';
          controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
          controlText.style.fontSize = '10px';
          controlText.style.lineHeight = '30px';
          controlText.style.paddingLeft = '5px';
          controlText.style.paddingRight = '5px';
          controlText.innerHTML = 'Center Map';
          controlUI.appendChild(controlText);

          // Setup the click event listeners: simply set the map to Chicago.
          controlUI.addEventListener('click', function() {
            map.setCenter({ lat: context.props.homePage.lat, lng: context.props.homePage.lng });
          });
        }
        
        var centerControlDiv = document.createElement('div');
        var centerControl = new CenterControl(centerControlDiv, map);

        centerControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

        let myMarker = new google.maps.Marker({
          position: {lat: context.props.homePage.lat, lng: context.props.homePage.lng},
          draggable: true,
          label: 'Note'
        });

        let myLocation = new google.maps.Marker({
          position: {lat: context.props.homePage.lat, lng: context.props.homePage.lng},
          draggable: false,
          label: 'Me',
          icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });

        myLocation.setMap(map);


        google.maps.event.addListener(myMarker, 'dragend', function(evt){
            document.getElementById('current').innerHTML = '<p>My location is: Current Lat: ' + evt.latLng.lat().toFixed(5) + ' Current Lng: ' + evt.latLng.lng().toFixed(5) + '</p>';
          
          console.log(evt.latLng.lat().toFixed(5), evt.latLng.lng().toFixed(5));

          context.props.dispatch(setNoteFormItem('lat', evt.latLng.lat().toFixed(5)));
          context.props.dispatch(setNoteFormItem('lon',evt.latLng.lng().toFixed(5)));

        });

        google.maps.event.addListener(myMarker, 'dragstart', function(evt){
            document.getElementById('current').innerHTML = '<p>Currently dragging marker...</p>';
        });

        map.setCenter({lat: context.props.homePage.lat, lng: context.props.homePage.lng});
        
        myMarker.setMap(map);

        // console.log(marker.getPosition().lat());
        // console.log(marker.getPosition().lng());
      });
    } 
  }
};
