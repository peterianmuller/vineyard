//React requirements
import React from 'react';

//UI
import { Form, Segment } from 'semantic-ui-react';

//Actions and helpers
import { createOrg, setOrgSignupItem } from '../actions/OrgSignup';
import { handleItemChange } from '../helpers/changeHandlers';
import { genDropdownOptions } from '../helpers/lifeHax';

//Styles
import styles from '../styles/AuthStyles';

export default class OrgSignup extends React.Component {
  handleChange(value) {
    return handleItemChange.bind(null, setOrgSignupItem, value); 
  }

  handleDropdownChange(e, { value }) {
    this.props.dispatch(setOrgSignupItem('tier', value));
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.dispatch(createOrg(this.props.orgSignup));
  }

  render() {
    const { orgSignup: fields } = this.props;

    return (
      <Segment style={styles.segment}>
        <h1>Register organization here!</h1>
        <Form onSubmit={ this.handleSubmit.bind(this) }>
          <Form.Input
            required
            label='Organization name'
            onChange={ this.handleChange('name') }
            value={ fields.name }
          />
          <Form.Input
            required
            label="Phone number"
            onChange={ this.handleChange('phone_number') }
            value={ fields.phone_number } 
          />
          <Form.Dropdown fluid selection
            required
            label='Tier'
            onChange={ this.handleDropdownChange.bind(this) }
            value={ fields.tier }
            options={ genDropdownOptions('Basic', 'Medium', 'Large') }
          />

          <Form.Input
            required
            label='Street'
            onChange={ this.handleChange('street') }
            value={ fields.street }
          />
          <Form.Input
            label='Street 2'
            onChange={ this.handleChange('street_2') }
            value={ fields.street_2 }
          />
          <Form.Input
            required
            label='Country'
            onChange={ this.handleChange('country') }
            value={ fields.country }
          />

          <Form.Group widths='equal'>
            <Form.Input
              required
              className='boxed'
              label='City'
              onChange={ this.handleChange('city') }
              value={ fields.city }
            />
            <Form.Input
              required
              className='boxed'
              label='State'
              onChange={ this.handleChange('state') }
              value={ fields.state }
            />
            <Form.Input
              required
              className='boxed'
              label='Zip Code'
              onChange={ this.handleChange('zip') }
              value={ fields.zip }
            />
          </Form.Group>

          <Form.Button primary fluid type='submit'>
            Submit 
          </Form.Button>
        </Form>
      </Segment>
    );
  }
}
