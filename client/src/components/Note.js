//React requirements
import React from 'react';

//UI
import { Grid, Divider } from 'semantic-ui-react';

export default props => (
  <div>
    <h5>{props.title}</h5>
    <p>{props.text}</p>
    <p>Latitude: {props.lat}, Longitude: {props.lon}</p>
    <Divider section />
  </div>

)

