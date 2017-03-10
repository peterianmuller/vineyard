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

/**
 * @function handleSubmit
 * @param {e} event
 * @description Calls postDataArray which sends a post request, and then dispatches action to clear input fields (prevent accumulation of old inputs). 
 * @memberOf DataForm
 */
  handleSubmit(e) {
    e.preventDefault();
    postDataArray(this.props.dataArray);
    this.props.dispatch(clearDataFields());

  }

  /**
 * @function clearData
 * @param {e} event
 * @description Clears data from redux store after it is posted to the PostgreSQL database.
 * @memberOf DataForm
 */
  clearData(e){
    e.preventDefault();
    this.props.dispatch(clearDataFields());
  }

  /**
 * @function addRow
 * @param {e} event
 * @memberOf DataForm
 * @description Adds row to table on user click.
 */
  addRow(e){
    e.preventDefault();
    console.log(this.props);
    this.props.dispatch(addRowToTable());
  }

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
