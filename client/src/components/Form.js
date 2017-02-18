import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Row, FormGroup, ControlLabel, HelpBlock, FormControl, Button, Form} from 'react-bootstrap';
import { handleItemChange } from '../helpers/changeHandlers';
import { setNoteFormItem, postNote } from '../actions/noteForm';


export default class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(event) {
    event.preventDefault();  
    this.props.dispatch(postNote(this.props.note));
  }
  
  render() {
    return (

      <Form onSubmit={this.handleSubmit}>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Note Title</ControlLabel>
            <FormControl
              name="title"
              type="text"
              value={this.props.note.title}
              placeholder="Enter text"
              onChange={handleItemChange.bind(null, setNoteFormItem, 'title')}
            />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Username</ControlLabel>
            <FormControl
              name="username"
              type="text"
              value={this.props.note.username}
              placeholder="Enter text"
              onChange={handleItemChange.bind(null, setNoteFormItem, 'username')}
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
            value={this.props.note.vineyard}
            placeholder="Enter text"
            onChange={handleItemChange.bind(null, setNoteFormItem, 'vineyard')}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Block</ControlLabel>
          <FormControl
            name="block"
            type="text"
            value={this.props.note.block}
            placeholder="Enter text"
            onChange={handleItemChange.bind(null, setNoteFormItem, 'block')}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Row</ControlLabel>
          <FormControl
            name = "row"
            type="text"
            value={this.props.note.row}
            placeholder="Enter text"
            onChange={handleItemChange.bind(null, setNoteFormItem, 'row')}
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
            value={this.props.note.rowStart}
            placeholder="Enter text"
            onChange={handleItemChange.bind(null, setNoteFormItem, 'rowStart')}
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
            value={this.props.note.rowEnd}
            placeholder="Enter text"
            onChange={handleItemChange.bind(null, setNoteFormItem, 'rowEnd')}
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
            value={this.props.note.lat}
            placeholder="Enter text"
            onChange={handleItemChange.bind(null, setNoteFormItem, 'lat')}
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
            value={this.props.note.lon}
            placeholder="Enter text"
            onChange={handleItemChange.bind(null, setNoteFormItem, 'lon')}
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
            value={this.props.note.textArea}
            placeholder="Enter text"
            onChange={handleItemChange.bind(null, setNoteFormItem, 'textArea')}
          />
          <FormControl.Feedback />
        </FormGroup>

        <input type="submit" value="Submit"/>
     
      </Form>
    );
  }
};

