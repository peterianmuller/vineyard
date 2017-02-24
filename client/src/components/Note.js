import React from 'react';
import { Grid, Divider } from 'semantic-ui-react';

export default props => (
  <div>
    <h5>{props.title}</h5>
    <p>{props.text}</p>
    <p>{props.lat}</p>
    <p>{props.lon}</p>
    <Divider section />
  </div>

)

