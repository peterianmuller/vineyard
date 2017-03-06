import React from 'react';
import Graph from '../components/Graph';

export default class DataVis extends React.Component {
  constructor(props){
    super(props);
  }

  // <Graph data={this.props.dataVis}/>
 render() {
  return(
    <div>
      <Graph />
    </div>
  )
 }
}