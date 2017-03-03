//React requirements
import { browserHistory } from 'react-router';

//update the state of the object at that key

import axios from 'axios';

export function addMapDataPoint(value) {
  return {
    type: 'ADD_MAP_POINT',
    value: value
  }  
}