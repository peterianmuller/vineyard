//React requirements
import React from 'react';
import { Link, browserHistory } from 'react-router';

//UI
import { Button, Form, Grid, Table, Icon, Label, Menu } from 'semantic-ui-react';
import Loadable from 'react-loading-overlay';

//Components
import DataFormInput from './DataFormInput';
//import Map from './Map';

//Actions and Functions
//import { setLatLong } from '../helpers/changeHandlers';
import { postData, appendDataFormItem } from '../actions/dataForm';

export default class DataForm extends React.Component {
  componentDidMount() {
    // set he userid for the note
    // this.props.dispatch(setNoteFormItem('username', this.props.auth.username))

    // navigator.geolocation.getCurrentPosition(
    //   ({ coords }) => { setLatLong(coords.latitude, coords.longitude); } );

    const today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    console.log('year: ', year, 'month: ', month, 'day: ', day)
    this.props.dispatch(appendDataFormItem('date', Date.UTC(year, month, day)));

    // this.props.dispatch(setNoteFormItem('date', formattedDate));
  }

  // clickFileChooser(e) {
  //   this.inputElement.click();
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(postData(this.props.dataForm));
  }
      // <Form onSubmit={this.handleSubmit.bind(this)}>
      //   <DataFormInput title='vineyard' field='vineyard' value={this.props.dataForm.title} />
      //   <DataFormInput title='block' field='block' value={this.props.dataForm.block} />
      //   <DataFormInput title='varietal' field='varietal' value={this.props.dataForm.varietal} />
      //   <DataFormInput title='clone' field='clone' value={this.props.dataForm.clone} />
      //   <DataFormInput title='pH' field='pH' value={this.props.dataForm.pH} />
      //   <DataFormInput title='Brix' field='Brix' value={this.props.dataForm.Brix} />
      //   <DataFormInput title='NaOH' field='NaOH' value={this.props.dataForm.NaOH} />
      //   <Button>Submit Data</Button>
      // </Form>

  //need to make this a grid

  render() {
    return (
      <div>

        <p>Standardization</p>
        <p>NaOH: 0.10</p>

      <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>vineyard</Table.HeaderCell>
          <Table.HeaderCell>block</Table.HeaderCell>
          <Table.HeaderCell>varietal</Table.HeaderCell>
          <Table.HeaderCell>clone</Table.HeaderCell>
          <Table.HeaderCell>pH</Table.HeaderCell>
          <Table.HeaderCell>brix</Table.HeaderCell>
          <Table.HeaderCell>NaOH</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <DataFormInput title='vineyard' field='vineyard' value={this.props.dataForm.title} />
          </Table.Cell>
          <Table.Cell>
            <DataFormInput title='block' field='block' value={this.props.dataForm.block} />
          </Table.Cell>
          <Table.Cell>
            <DataFormInput title='varietal' field='varietal' value={this.props.dataForm.varietal} />
          </Table.Cell>
          <Table.Cell>
            <DataFormInput title='clone' field='clone' value={this.props.dataForm.clone} />
          </Table.Cell>
          <Table.Cell>
            <DataFormInput title='pH' field='pH' value={this.props.dataForm.pH} />
          </Table.Cell>
          <Table.Cell>
            <DataFormInput title='Brix' field='Brix' value={this.props.dataForm.Brix} />
          </Table.Cell>
          <Table.Cell>
            <DataFormInput title='NaOH' field='NaOH' value={this.props.dataForm.NaOH} />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
      </Table.Body>

    </Table>
    <Button onClick={this.handleSubmit.bind(this)}>Submit Data</Button>

      </div>
    );
  }
}
