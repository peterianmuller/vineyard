import React from 'react';
import Graph from '../components/Graph';
import {Form} from 'semantic-ui-react';

import { genDropdownOptions, genDropdownOptionsOgs } from '../helpers/lifeHax';
import { setAnalysisItem } from '../actions/dataVis';

export default class DataVis extends React.Component {
  constructor(props){
    super(props);
  }


  handleDropdownChange(item, e, { value }) {
    this.props.dispatch(setAnalysisItem(item, value));
  }

  findBlock(inputArray) {
  	var context = this;
  	var vinObj = inputArray.filter(function(obj) {
  		console.log('here!', context.props.dataVis.vineyard)
  		return obj.name === context.props.dataVis.vineyard;
  	})[0];
  	console.log('should be a vineyard  object: ', vinObj);
  	console.log(vinObj.blocks, 'blocks array?')
  	return vinObj.blocks
  }

  findRow(inputArray) {
  	console.log('find row called')
  	var context = this;
  	var vinObj = inputArray.filter(function(obj) {
  		console.log('here!', context.props.dataVis.vineyard)
  		return obj.name === context.props.dataVis.block;
  	})[0];
  	console.log('should be a vineyard  object: ', vinObj);
  	console.log(vinObj.rows, 'row array?')
  	return vinObj.rows
  }


 render() {
  this.findBlock.bind(this);
 	const vineyardData = JSON.parse(window.localStorage.getItem('vineyards')).org_info;
 	console.log('meowoowowowowo', vineyardData);
 	const methods = [
 		[1, 'brix'],
 		[2, 'ph'],
 		[3, 'ta']
 	];
 	let blocks = [];
	if(this.props.dataVis.vineyard) {
		console.log('updated vineyard', this.props)
		blocks = this.findBlock(vineyardData);
	}
	let rows = [];
	if(this.props.dataVis.block) {
		console.log('meow meow rows: ', this.props)
		rows = this.findRow(blocks);
	}
  return(
    <div>

    <Form.Dropdown selection
      label='Method'
      // loading={ fields.orgs_loading }
      placeholder='Method'
    
      onChange={ this.handleDropdownChange.bind(this, 'method') }
      options={ genDropdownOptionsOgs(
        methods.map(item => item[1])
      ) }
    />

    <Form.Dropdown selection
      label='Vineyard'
      // loading={ fields.orgs_loading }
      placeholder='Vineyard'
    
      onChange={ this.handleDropdownChange.bind(this, 'vineyard') }
      options={ genDropdownOptionsOgs(
        vineyardData.map(item => item.name)
      ) }
    />


    <Form.Dropdown selection
      label='Block'
      // loading={ fields.orgs_loading }
      placeholder='Block'
    
      onChange={ this.handleDropdownChange.bind(this, 'block') }
   	  options={ genDropdownOptionsOgs(
         blocks.map(item => item.name)
      ) }
    />


    <Form.Dropdown selection
      label='Row'
      // loading={ fields.orgs_loading }
      placeholder='Row'
    
      onChange={ this.handleDropdownChange.bind(this, 'row') }
      options={ genDropdownOptionsOgs(
        rows.map(item => item.number)
      ) }
    />



      <Graph />
    </div>


  )
 }
}