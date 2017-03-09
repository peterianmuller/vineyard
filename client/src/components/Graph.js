
//React requirements

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Highcharts from 'highcharts';

import modulesExport from 'highcharts/modules/exporting';
import darkUnica from 'highcharts/themes/dark-unica';
modulesExport(Highcharts);
darkUnica(Highcharts);



import { Link, browserHistory } from 'react-router';

export default class Graph extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        let dataProps = this.props.props;
        let method = dataProps.method;
        let block = dataProps.block;
        let row = dataProps.row;

        let text;
        if(dataProps.method === 'brix') {
            text = 'Brix°';
        } 
        if (dataProps.method === 'ph') {
            text = 'pH';
        } 
        if(dataProps.method === 'ta') {
            text = 'Titratable Acidity (g/L)';
        }

        var chart = new Highcharts.Chart({
        chart: {
        type: 'spline',
        renderTo: 'highcharts-container'
        },
        title: {
            text: method + ', block ' + block + ' in row ' + row
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: text
            },
            min: 0
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },
        series: [{
            data: this.props.props.results.length > 0 ? this.props.props.results : [],
            showLegend: false,
            dataLabels: {
                enabled: true
            }
            }]
        })
    };

    render(){
      return(
           <div id='highcharts-container'>
             
           </div>
        )
    }

}    