//React requirements
import React from 'react';
import { Link, browserHistory } from 'react-router';

//UI
import { Button, Form, Grid, Table, Icon, Label, Menu } from 'semantic-ui-react';
import Loadable from 'react-loading-overlay';

//Components
import DataFormInput from './DataFormInput';
//import Map from './Map';
import TableRow from './TableRow';

//Actions and Functions
//import { setLatLong } from '../helpers/changeHandlers';
import { postData, appendDataFormItem } from '../actions/dataForm';
import { addRowToTable, postDataArray, clearDataFields } from '../actions/dataArray';

export default class DataForm extends React.Component {
  componentDidMount() {
    
    // set he userid for the note
    // this.props.dispatch(setNoteFormItem('username', this.props.auth.username))

    // navigator.geolocation.getCurrentPosition(
    //   ({ coords }) => { setLatLong(coords.latitude, coords.longitude); } );

    // const today = new Date();
    // var year = today.getFullYear();
    // var month = today.getMonth();
    // var day = today.getDate();
    // console.log('year: ', year, 'month: ', month, 'day: ', day)
    // this.props.dispatch(appendDataFormItem('date', Date.UTC(year, month, day)));


    // this.props.dispatch(setNoteFormItem('date', formattedDate));
  }

  // clickFileChooser(e) {
  //   this.inputElement.click();
  // }

  handleSubmit(e) {
    e.preventDefault();
    postDataArray(this.props.dataArray);
    this.props.dispatch(clearDataFields());

  }

  clearData(e){
    e.preventDefault();
    this.props.dispatch(clearDataFields());
  }

  addRow(e){
    // add row to table
    // start with two rows 
    e.preventDefault();
    console.log(this.props);
    this.props.dispatch(addRowToTable());

  }
   
   // need to have an add row button add new rows upon clicking
   // need to keep track of how many rows to have on the form in a store in redux and for each
   // row we add to redux we render it on the page

  render(props) {
    return (
      <div>

        <p>Standardization</p>
        <p>NaOH: 0.10</p>
   
      <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Vineyard</Table.HeaderCell>
          <Table.HeaderCell>Row</Table.HeaderCell>
          <Table.HeaderCell>Block</Table.HeaderCell>
          <Table.HeaderCell>Varietal</Table.HeaderCell>
          <Table.HeaderCell>Clone</Table.HeaderCell>
          <Table.HeaderCell>pH</Table.HeaderCell>
          <Table.HeaderCell>brix</Table.HeaderCell>
          <Table.HeaderCell>∆ NaOH(mL)</Table.HeaderCell>
          <Table.HeaderCell>Titratable Acidity</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {this.props.dataArray.map((element, key) => (
          <TableRow dataForm={element} key={key} akey={key} dispatch={this.props.dispatch} />
        ))}
      </Table.Body>

    </Table>

    <Button onClick={this.handleSubmit.bind(this)}>Submit Data</Button>
    <Button onClick={this.addRow.bind(this)}>Add Row</Button>
    <Button onClick={this.clearData.bind(this)}>Clear Data</Button>

      </div>
    );
  }
}
