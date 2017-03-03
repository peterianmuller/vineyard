import React from 'react';
import ReactDom from 'react-dom';

import { Map, TileLayer, Circle, FeatureGroup } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw";

import { addMapDataPoint } from '../actions/mapVis';

let polyline;
const subs = [ 'a', 'b', 'c', 'd' ];
let counter = 0;

export default class MapView extends React.Component {
	constructor(props) {
		super(props)
    this.state = {
      //vineyard coordinates
      lat: 38.384,
      lng: -122.865,
      zoom: 20,
      shapes: []
    };
	}

  _onEditPath(e) {
    console.log('Path edited !');
  }



  _onCreate(e) {
    var label = prompt();
    let type = e.layerType;

    // polyline = e.layer;

    let newPoly = e.layer._latlngs[0];
    //console.log('new user shape drawn: ', newPoly, 'layer type: ', type);
    console.log('new user shape drawn with multiple points: ', e.layer._latlngs , 'layer type: ', type);

    console.log(addMapDataPoint);
    console.log('what does this look like', newPoly);
    console.log('obj with label prop and coords prop', {label: label, coords: newPoly});

    this.props.dispatch(addMapDataPoint({label: label, coords: newPoly}));
    
    this.state.shapes.push([label, newPoly]);
    // this.state.shapes = this.state.shapes.concat([label, newPoly])
    console.log('shapes in the state: ', this.state.shapes);
    console.log('this is the state: ', this.state);
    //polyline._latlngs[0] is the array of coordinates for that shape, 
    //in the array, each index is a L.LatLng object that holds lat and lon
    // To edit this polyline call : polyline.handler.enable()
    console.log('Path created !');
  }

  _onDeleted(e) {
    console.log('Path deleted !');
  }

  _mounted(drawControl) {
    console.log('Component mounted !');
  }

  _onEditStart() {
    console.log('Edit is starting !');
  }

  _onEditStop() {
    console.log('Edit is stopping !');
  }

  _onDeleteStart() {
    console.log('Delete is starting !');
  }

  _onDeleteStop() {
    console.log('Delete is stopping !');
  }

	render() {
    const position = [this.state.lat, this.state.lng];
    console.log(this.state, 'meow')
    return (
			<div>
        <Map
          style={{height: "100vh"}}
          center={position}
          zoom={this.state.zoom}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/andipants12/cizsps6wg00842ro1wngxcqof/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW5kaXBhbnRzMTIiLCJhIjoiY2l6b244ampwMDAxcDMzbnh5enpleTB2eCJ9.zu82GF0owfnb54lAGMUKKA"
            attribution='&copy;<a href="https://www.mapbox.com/about/maps" target="_blank">MapBox</a>, &copy;<a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
          <FeatureGroup>
            <EditControl
              position='topright'
              onEdited={this._onEditPath}
              onCreated={this._onCreate.bind(this)}
              onDeleted={this._onDeleted}
              onMounted={this._mounted}
              onEditStart={this._onEditStart}
              onEditStop={this._onEditStop}
              onDeleteStart={this._onDeleteStart}
              onDeleteStop={this._onDeleteStop}
              draw={{
                rectangle: false
              }}
            />
            <Circle center={[51.51, -0.06]} radius={200} />
        </FeatureGroup>
        <FeatureGroup>
        </FeatureGroup>




        </Map>
      </div>
		)
	}
}

//look into not using tile layer, functions that add tiles on component load


