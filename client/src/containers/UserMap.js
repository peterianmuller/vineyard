import React from 'react';
import ReactDom from 'react-dom';

import { Button } from 'semantic-ui-react';
import { Map, TileLayer, Polygon, Marker, FeatureGroup, Popup } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw";
import L from 'leaflet';
import { showPolygonsOnMap } from '../actions/polygons';
import {addPolys} from '../actions/mapVis';

import { addMapDataPoint, postMapData, clearDataPoints, testOrgs, getShapeData } from '../actions/mapVis';
import { getNotes } from '../actions/notesView';
import { setHomeLocation } from '../actions/homeView';

//import { updateHomeLocationBtn } from '../components/map';


let polyline;

export default class MapView extends React.Component {
	constructor(props) {
		super(props)
    // this.state = {
    //   //vineyard coordinates
    //   // -45.0197557,169.1879725
    //   lat: 38.3849138,
    //   lng: -122.8651004,
    //   zoom: 20,
    //   shapes: []
    // };
	}
  componentDidMount() {
    if (this.props.polygons.polygons.length === 0) {
      console.log('org id in usermap?: ', this.props.auth.org_id)
      this.props.dispatch(getShapeData(this.props.auth.org_id));
    }
  }

  parsePolygonArray(dbResults) {
    if(this.props.polygons.polygons.length > 0) {
      var coordinateResults = dbResults[0].coords;
      var polygonIds = {}, polygonCollection = [];
      coordinateResults.forEach((coord) => {
        if(!polygonIds[coord.polygon_id]) {
          polygonIds[coord.polygon_id] = 0;
        }
      });
      for (var key in polygonIds) {
        var collection = coordinateResults.filter((coords) => {
            return coords.polygon_id.toString() === key;
          }).sort(function(a, b) {
          return a.id > b.id;
        })
        polygonCollection.push(collection)
      }
      const polyArray = Object.keys(polygonIds);
      const labels = dbResults[0].labels;
      const namesObj = {}
      for(var i = 0; i < labels.length; i++) {
        namesObj[polyArray[i]] = labels[i];
      }
      return {
        polygonCollection: polygonCollection,
        names: namesObj
      };
      
    }
  }

  showShapes(e) {
    e.preventDefault();
    this.props.dispatch(showPolygonsOnMap());
  }

  _onEditPath(e) {
    console.log('Path edited !');
  }

  _onCreate(e) {
    var label = prompt();
    let type = e.layerType;
    let newPoly = e.layer._latlngs[0];

    this.props.dispatch(addMapDataPoint({label: label, coords: newPoly, org_id: this.props.auth.org_id}));
    
    
    postMapData(this.props.mapVis);

    this.props.dispatch(clearDataPoints());
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

  createIcon(text) {
    var inputText = text.toString();
    return L.divIcon({
      className: "labelClass",
      html: inputText
    })
  }

  createNoteIcon(text) {
    return L.icon({
      iconUrl: 'redPin.png',
      iconRetinaUrl: 'redPin.png',
      iconSize: [17, 17],
      //iconAnchor: [22, 94],
      //popupAnchor: [-3, -76]
    })
  }

  showNotes(e) {
    e.preventDefault();
    this.props.dispatch(getNotes());
  }


	render() {
    const myShapes = this.parsePolygonArray(this.props.polygons.polygons);
    return (
			<div>
        <Map
          style={{height: "100vh"}}
          center={[38.3854604,-122.8651433]}
          zoom={15}>
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
          {this.props.polygons.show_polys && this.props.polygons.polygons.length > 0 ? myShapes.polygonCollection.map((shape) => (<Polygon positions={shape} key={shape[0].lat} />)) : ''}
          {this.props.polygons.show_polys && this.props.polygons.polygons.length > 0 ? myShapes.polygonCollection.map((shape) => (<Marker icon={this.createIcon(myShapes.names[shape[0].polygon_id])} key={shape[0].lat} position={shape[0]}/>)) : ''}
        </FeatureGroup>

        {
          this.props.notesView.map((note, key) => (
            <Marker position={[note.latitude, note.longitude]} key={key} icon={this.createNoteIcon()}> 
              <Popup>
                <span>{note.title}</span>
              </Popup>
            </Marker>  
          ))
        }
        </Map>

        <Button className='map_buttons' onClick={this.showShapes.bind(this)}>Show Blocks</Button>
        <Button className='map_buttons' onClick={this.showShapes.bind(this)}>Hide Blocks</Button>
        <Button onClick={this.showNotes.bind(this)}>Show Notes</Button>

      </div>
		)
	}
}
