import { browserHistory } from 'react-router';
import { dispatch } from 'react-redux';


//update the state of the object at that key

import axios from 'axios';

export function showPolygonsOnMap() {
  return {
    type: 'RENDER_POLYGONS'
  }  
}