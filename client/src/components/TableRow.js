import React from 'react';

import { Form, Header, Icon, Input, Label, Segment, TextArea, Table } from 'semantic-ui-react';

import DataFormInput from './DataFormInput';


export default props => {
 
  return (<Table.Row>
    <Table.Cell>
      <DataFormInput dispatch={props.dispatch} akey={props.akey} title='vineyard' field='vineyard' value={props.dataForm.vineyard} />
    </Table.Cell>
    <Table.Cell>
      <DataFormInput title='block' field='block' value={props.dataForm.block} />
    </Table.Cell>
    <Table.Cell>
      <DataFormInput title='varietal' field='varietal' value={props.dataForm.varietal} />
    </Table.Cell>
    <Table.Cell>
      <DataFormInput title='clone' field='clone' value={props.dataForm.clone} />
    </Table.Cell>
    <Table.Cell>
      <DataFormInput title='pH' field='pH' value={props.dataForm.pH} />
    </Table.Cell>
    <Table.Cell>
      <DataFormInput title='Brix' field='Brix' value={props.dataForm.Brix} />
    </Table.Cell>
    <Table.Cell>
      <DataFormInput title='NaOH' field='NaOH' value={props.dataForm.NaOH} />
    </Table.Cell>
  </Table.Row>
)};