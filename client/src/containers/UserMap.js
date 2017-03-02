import React from 'react';
import ReactDom from 'react-dom';

import { Map, TileLayer } from 'react-leaflet';

export default class MapView extends React.Component {
	constructor(props) {
		super(props)
    this.state = {
      lat: 37.783,
      lng: -122.409,
      zoom: 10,
    };
	}

	render() {
    const position = [this.state.lat, this.state.lng];
    return (
			<div>
        <Map
          style={{height: "100vh"}}
          center={position}
          zoom={this.state.zoom}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/andipants12/cizsps6wg00842ro1wngxcqof/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW5kaXBhbnRzMTIiLCJhIjoiY2l6b244ampwMDAxcDMzbnh5enpleTB2eCJ9.zu82GF0owfnb54lAGMUKKA"
            attribution='&copy;<a href="https://www.mapbox.com/about/maps" target="_blank">MapBox</a>, &copy;<a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        </Map>
      </div>
		)
	}
}

//look into not using tile layer, functions that add tiles on component load


