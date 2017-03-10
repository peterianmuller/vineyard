import React from 'react';
import Graph from '../components/Graph';
import {Form} from 'semantic-ui-react';

import { genDropdownOptions, genDropdownOptionsOgs } from '../helpers/lifeHax';
import { setAnalysisItem, getAnalysis } from '../actions/dataVis';

export default class DataVis extends React.Component {
  constructor(props){
    super(props);
  }


  handleDropdownChange(item, e, { value }) {
    this.props.dispatch(setAnalysisItem(item, value));
  }

/**
 * @function findBlock
 * @param {array} inputArray
 * @description Traverses vineyard data tree on from local storage and finds the blocks related to the selected vineyard.
 * @memberOf DataVis Container
 */
  findBlock(inputArray) {
  	var context = this;
  	var vinObj = inputArray.filter(function(obj) {
  		return obj.name === context.props.dataVis.vineyard;
  	})[0];
  	return vinObj.blocks
  }

/**
 * @function findRow
 * @param {array} inputArray
 * @description Helper function that traverses localStorage organization tree and returns the rows in the selected block.
 * @memberOf DataVis Container
 */
  findRow(inputArray) {
  	var context = this;
  	var vinObj = inputArray.filter(function(obj) {
  		return obj.name === context.props.dataVis.block;
  	})[0];
  	return vinObj.rows
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(getAnalysis(this.props.dataVis));
  }


 render() {
  this.findBlock.bind(this);
 	const vineyardData = JSON.parse(window.localStorage.getItem('vineyards')).vineyards;
 	const methods = [
 		[1, 'brix'],
 		[2, 'ph'],
 		[3, 'ta']
 	];
 	let blocks = [];
	if(this.props.dataVis.vineyard) {
		blocks = this.findBlock(vineyardData);
	}
	let rows = [];
	if(this.props.dataVis.block) {
		rows = this.findRow(blocks);
	}

  return(
    <div>
      <Form onSubmit={ this.handleSubmit.bind(this) }>
        <Form.Dropdown selection
          label='Method'
          placeholder='Method'
          onChange={ this.handleDropdownChange.bind(this, 'method') }
          options={ genDropdownOptionsOgs(
            methods.map(item => item[1])
          ) }
        />

        <Form.Dropdown selection
          label='Vineyard'
          placeholder='Vineyard'
          onChange={ this.handleDropdownChange.bind(this, 'vineyard') }
          options={ genDropdownOptionsOgs(
            vineyardData.map(item => item.name)
          ) }
        />

        <Form.Dropdown selection
          label='Block'
          placeholder='Block'
          onChange={ this.handleDropdownChange.bind(this, 'block') }
       	  options={ genDropdownOptionsOgs(
             blocks.map(item => item.name)
          ) }
        />

        <Form.Dropdown selection
          label='Row'
          placeholder='Row'
          onChange={ this.handleDropdownChange.bind(this, 'row') }
          options={ genDropdownOptionsOgs(
            rows.map(item => item.number)
          ) }
        />

        <Form.Button primary fluid type='submit'>Get Data</Form.Button>
      </Form>

      {this.props.dataVis.results.length > 0 ? (<Graph props={this.props.dataVis}/>) : ''}

    </div>


  )
 }
}