import React from 'react';
import axios from 'axios';
import { Button, Nav, Navbar, NavItem } from 'react-bootstrap';
import { setLatLong } from '../helpers/changeHandlers';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <div id='googleMaps' style = {{'margin': '0 auto', 'height': '50%', 'width': '50%', 'borderRadius': '5px' }}>
        </div>
      </div> 
  )};


  componentDidMount() {
    this.createMap();
  };

  createMap() {
    var context = this;

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
      //need to get current coordinates to center map where user is at
        //navigator is async, so we can only access these coords inside the 
      navigator.geolocation.getCurrentPosition(function(pos){
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;
        var map = new google.maps.Map(document.getElementById('googleMaps'), {
          center: { lat: lat, lng: lon },
          zoom: 5,
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false
        });
      });
    }  
  }
};