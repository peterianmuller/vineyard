import React from 'react';
import axios from 'axios';
import { Button, Nav, Navbar, NavItem } from 'react-bootstrap';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <div id='googleMaps' align = 'center' style = {{'margin': '0 auto', 'height': '50%', 'width': '50%', 'borderRadius': '5px' }}>
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
      var ref = window.document.getElementsByTagName('script')[0];
      var script = window.document.createElement('script');
      script.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyCBb0bm-_wNIf3oDMi-5PN_zeOf1bRWstI&libraries=places&callback=initMap';
      ref.parentNode.insertBefore(script, ref);
      script.onload = function() {
        this.remove();
      };
    })();  

    function initMap() {
      var map = new google.maps.Map(document.getElementById('googleMaps'), {
        center: {lat: 37.783744, lng: -122.409079},
        zoom: 5,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
      });
    }  
  }
};