
//React requirements

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Highcharts from 'highcharts';

import modulesExport from 'highcharts/modules/exporting';
modulesExport(Highcharts);



import { Link, browserHistory } from 'react-router';

export default class Graph extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.props, 'graphs props')
        var chart = new Highcharts.Chart({
        chart: {
        type: 'spline',
        renderTo: 'container'
        },
        title: {
            text: 'pH clone comparison, block 5'
        },
        subtitle: {
            text: 'Irregular time data in Highcharts JS'
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
                text: 'Snow depth (m)'
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
        // name: 'pH block 5 abel',
        // Define the data points. All series have a dummy year
        // of 1970/71 in order to be compared on the same x axis. Note
        
            // that in JavaScript, months start at 0 for January, 1 for February etc.
            data: this.props.props.length > 0 ? this.props.props : [],
            // data: [ [ 1467331200000, 3.07 ],
            //     [ 1467504000000, 3.01 ],
            //     [ 1468108800000, 3.05 ],
            //     [ 1469059200000, 3.11 ],
            //     [ 1469232000000, 2.94 ],
            //     [ 1469318400000, 3.02 ],
            //     [ 1469404800000, 2.98],
            //     [ 1470096000000, 3.02 ],
            //     [ 1470182400000, 3.01 ],
            //     [ 1470268800000, 3.05 ],
            //     [ 1470441600000, 3.05 ]
            //    ], 
            showLegend: true,
            dataLabels: {
                enabled: true
            }
            }]
        })
    };

    render(){
    console.log(this.props.props, 'data vis props?')
      return(
           <div id='container'>
             
           </div>
        )
    }

}    