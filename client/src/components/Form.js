import React from 'react';
import ReactDOM from 'react-dom';
import {FormGroup, ControlLabel, HelpBlock, FormControl, Button, Form} from 'react-bootstrap';

export default class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      vineyard: '',
      block: '',
      row: '',
      rowStart: '',
      rowEnd: '',
      lat: '',
      lon: '',
      textArea: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(event) {
    event.preventDefault();  
    console.log(this.state);
  }
  
  // getValidationState() {
  //   const length = this.state.value.length;
  //   if (length > 10) return 'success';
  //   else if (length > 5) return 'warning';
  //   else if (length > 0) return 'error';
  // },

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
   // console.log(this.state);

  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Username</ControlLabel>
          <FormControl
            name="username"
            type="text"
            value={this.state.username}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />

        </FormGroup>

        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Vineyard</ControlLabel>
          <FormControl
            name="vineyard"
            type="text"
            value={this.state.vineyard}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Rows</ControlLabel>
          <FormControl
            name = "rows"
            type="text"
            value={this.state.row}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Row Start</ControlLabel>
          <FormControl
            name="rowStart"
            type="text"
            value={this.state.rowStart}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Row End</ControlLabel>
          <FormControl
            name="rowEnd"
            type="text"
            value={this.state.rowEnd}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Latitude</ControlLabel>
          <FormControl
            name="lat"
            type="text"
            value={this.state.lat}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Longitude</ControlLabel>
          <FormControl
            name="lon"
            type="text"
            value={this.state.lon}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Note Text</ControlLabel>
          <FormControl componentClass="textarea"
            name="textArea"
            type="text"
            value={this.state.textArea}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <input type="submit" value="Submit"/>
     
      </Form>
    );
  }
};

