//React requirements
import React from 'react';

//UI
import { Button, Form, Grid } from 'semantic-ui-react';

//Actions and functions
import { handleItemChange } from '../helpers/changeHandlers';

export default props => (
  <div className='max500width multiColumnInput'>
    <Grid.Row>
      <Grid.Column>
	      <Form.Input
          label='Email'
					value={props.signup.email} 
					onChange={ handleItemChange.bind(null, props.setItem, 'email') } 
					placeholder='Email' 
				/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Form.Group widths='equal'>
          <Form.Input
            label="First name"
	  	    	value={props.signup.first_name} 
	  	    	onChange={ handleItemChange.bind(null, props.setItem, 'first_name') } 
	  	    	placeholder='First Name' 
	  	    />
          <Form.Input
            label='Last name'
	  	    	value={props.signup.last_name} 
	  	    	onChange={ handleItemChange.bind(null, props.setItem, 'last_name') } 
	  	    	placeholder='Last Name' 
	  	    />
        </Form.Group>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Form.Group widths='equal'>
          <Form.Input 
            type='date'
            label='Birthdate'
	  	    	value={props.signup.birthdate} 
	  	    	onChange={ handleItemChange.bind(null, props.setItem, 'birthdate') } 
	  	    	placeholder='Day' 
	  	    />
        </Form.Group>
      </Grid.Column>
    </Grid.Row>
  </div>
);
