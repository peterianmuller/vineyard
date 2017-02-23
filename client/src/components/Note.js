import React from 'react';
import { Grid } from 'semantic-ui-react';

export default props => (

  <Grid>
   <Grid.Row columns={1}>
      <Grid.Column>
        {props.title}
      </Grid.Column>
   </Grid.Row>  
   <Grid.Row columns={1}>
     <Grid.Column>
        {props.text}
     </Grid.Column> 
   </Grid.Row>   
  </Grid>  
)

