import React from 'react';

import { Form, Header, Icon, Input, Label, Segment, TextArea, Table } from 'semantic-ui-react';

import DataFormInput from './DataFormInput';

import { addDataToArray } from '../actions/dataArray';


export default props => {

  
  // const today = new Date();
  // var year = today.getFullYear();
  // var month = today.getMonth();
  // var day = today.getDate();
  // console.log('year: ', year, 'month: ', month, 'day: ', day)
  // props.dispatch(addDataToArray(props.akey, 'date', Date.UTC(year, month, day)));

  var calculateTitrate = (NaOH) => {
    return 0.10 * NaOH * 7.5;
  }
 
  return (<Table.Row>
    <Table.Cell>
      <DataFormInput dispatch={props.dispatch} akey={props.akey} title='vineyard' field='vineyard' value={props.dataForm.vineyard} />
    </Table.Cell>
    <Table.Cell>
      <DataFormInput dispatch={props.dispatch} akey={props.akey} title='row' field='row' value={props.dataForm.row} />
    </Table.Cell>
    <Table.Cell>
      <DataFormInput dispatch={props.dispatch} akey={props.akey} title='block' field='block' value={props.dataForm.block} />
    </Table.Cell>
    <Table.Cell>
      <DataFormInput dispatch={props.dispatch} akey={props.akey} title='varietal' field='varietal' value={props.dataForm.varietal} />
    </Table.Cell>
    <Table.Cell>
      <DataFormInput dispatch={props.dispatch} akey={props.akey} title='clone' field='clone' value={props.dataForm.clone} />
    </Table.Cell>
    <Table.Cell>
      <DataFormInput dispatch={props.dispatch} akey={props.akey} title='pH' field='pH' value={props.dataForm.pH} />
    </Table.Cell>
    <Table.Cell>
      <DataFormInput dispatch={props.dispatch} akey={props.akey} title='Brix' field='Brix' value={props.dataForm.brix} />
    </Table.Cell>
    <Table.Cell>
      <DataFormInput dispatch={props.dispatch} akey={props.akey} title='NaOH' field='NaOH' value={props.dataForm.NaOH} />
    </Table.Cell>
    <Table.Cell>
      <DataFormInput dispatch={props.dispatch} akey={props.akey} title='titratable' field='titratable' value={props.dataForm.titratable} />
    </Table.Cell>
  </Table.Row>
)};