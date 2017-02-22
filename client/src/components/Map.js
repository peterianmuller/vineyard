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
        <div id='googleMaps' style = {{'margin': '0 auto', 'height': '50%', 'width': '50%', 'borderRadius': '3px' }}>
        </div>
        <div id="current" style={{'paddingTop': '25px'}}>Please move the note to a location</div>
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

    //let markers = [];





    function initMap() {
      //need to get current coordinates to center map where user is at
        //navigator is async, so we can only access these coords inside the 
      navigator.geolocation.getCurrentPosition(function(pos){
        var lat = pos.coords.latitude;
        var lng = pos.coords.longitude;
        var map = new google.maps.Map(document.getElementById('googleMaps'), {
          center: { lat: lat, lng: lng },
          zoom: 19,
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false
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
            map.setCenter({ lat: lat, lng: lng });
          });
        }
        
        var centerControlDiv = document.createElement('div');
        var centerControl = new CenterControl(centerControlDiv, map);

        centerControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

        let myMarker = new google.maps.Marker({
          position: {lat: lat, lng: lng},
          draggable: true,
          label: 'Note'
        });

        let myLocation = new google.maps.Marker({
          position: {lat: lat, lng: lng},
          draggable: false,
          label: 'Me',
          icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
        myLocation.setMap(map);


        google.maps.event.addListener(myMarker, 'dragend', function(evt){
            document.getElementById('current').innerHTML = '<p>My location is: Current Lat: ' + evt.latLng.lat().toFixed(5) + ' Current Lng: ' + evt.latLng.lng().toFixed(5) + '</p>';
            //update request to note with evt.latLng.lat().toFixed(5) and evt.latLng.lng().toFixed(5)
            

        });

        google.maps.event.addListener(myMarker, 'dragstart', function(evt){
            document.getElementById('current').innerHTML = '<p>Currently dragging marker...</p>';
        });

        map.setCenter(myMarker.position);
        
        myMarker.setMap(map);

        // console.log(marker.getPosition().lat());
        // console.log(marker.getPosition().lng());
      });
    } 
  }
};