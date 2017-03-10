//React requirements
import React from 'react';
import ReactDom from 'react-dom';

//UI
import { Button, Segment } from 'semantic-ui-react';

//Map functions
import { Map, TileLayer, Polygon, Marker, FeatureGroup, Popup } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw";
import L from 'leaflet';

//Actions
import { showPolygonsOnMap } from '../actions/polygons';
import {addPolys} from '../actions/mapVis';
import { addMapDataPoint, postMapData, clearDataPoints, testOrgs, getShapeData } from '../actions/mapVis';
import { getNotes } from '../actions/notesView';
import { setHomeLocation } from '../actions/homeView';

let polyline;

export default class MapView extends React.Component {
	constructor(props) {
		super(props)
	}
  
  componentDidMount() {
    if (this.props.polygons.polygons.length === 0) {
      this.props.dispatch(getShapeData(this.props.auth.org_id));
    }
  }

  /**
 * @function UserMap
 * @param {array} dbResults
 * @description Array of coordinate objects from the database. This function returns an object of polygon coordinates(polygonCollection) and polygon labels (names) groups coordinates by polygon Id into an array  of polygon-related coordinate arrays. Also organizes labels in ascending order of their related Polygon Ids.
 * @memberOf MapView Container
 */
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
  /**
 * @funciton showShapes
 * @param {event} e
 * @description Button Click event. Toggles polygons on and off screen with associated labels.
 * @memberOf MapView Component
 */
  showShapes(e) {
    e.preventDefault();
    this.props.dispatch(showPolygonsOnMap());
  }

  /**
 * @function _onCreate
 * @param {event} e
 * @description Listens for Leaflet-Draw 'draw:created' event. This method captures the shape that was drawn as 'newPoly' then dispatches and action that adds the coordinates to the Redux store, eventually posting to the database.
 * @memberOf MapView Container
 */
  _onCreate(e) {
    var label = prompt();
    let type = e.layerType;
    let newPoly = e.layer._latlngs[0];
    this.props.dispatch(addMapDataPoint({label: label, coords: newPoly, org_id: this.props.auth.org_id}));
    postMapData(this.props.mapVis);
    this.props.dispatch(clearDataPoints());
  }


  /**
 * @function createIcon
 * @param {string} text
 * @memberOf MapView Container
 * @description This helper creates a Leaflet.js label for the polygons from their labels.
 */
  createIcon(text) {
    var inputText = text.toString();
    return L.divIcon({
      className: "labelClass",
      html: inputText
    })
  }

  /**
 * @function createNoteIcon
 * @param {}
 * @description This helper creates a Leaflet.js icon for the notes.
 * @memberOf MapView Container
 */
  createNoteIcon() {
    return L.icon({
      iconUrl: 'redPin.png',
      iconRetinaUrl: 'redPin.png',
      iconSize: [17, 17]
    })
  }


/**
 * @function showNotes
 * @param {event} e
 * @description  Renders pin and pop up label for notes on user click.
 * @memberOf MapView Container
 */
  showNotes(e) {
    e.preventDefault();
    this.props.dispatch(getNotes());
  }


	render() {
    const myShapes = this.parsePolygonArray(this.props.polygons.polygons);
    return (
      <Segment style={ { height: '87%', maxWidth: '900px', margin: '0 auto' } }>
		  	<div style={ { position: 'relative' } }>
          <Map
            style={{height: "100vh"}}
            center={[-45.0197557,169.1879725]}
            zoom={13}>
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
            this.props.notesView.notes.map((note, key) => (
              <Marker position={[note.latitude, note.longitude]} key={key} icon={this.createNoteIcon()}> 
                <Popup>
                  <span>{note.title}</span>
                </Popup>
              </Marker>  
            ))
          }
          </Map>

          <Button style={ { position: 'absolute', top: 0, left: '27%' } } onClick={this.showShapes.bind(this)}>Show Blocks</Button>
          <Button style={ { position: 'absolute', top: 0, right: '43%' } } onClick={this.showShapes.bind(this)}>Hide Blocks</Button>
          <Button style={ { position: 'absolute', top: 0, right: '27%' } } onClick={this.showNotes.bind(this)}>Show Notes</Button>

        </div>
      </Segment>
		)
	}
}
