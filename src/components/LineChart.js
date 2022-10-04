import React, { Component } from 'react';
//import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

// LineChart
class LineChart extends Component {
    constructor(props) {
        super(props);
        //assigns a React reference to the Component so it can
        // be located in the DOM by React
        this.canvasRef = React.createRef();
        /*
        this.state = {

            data: this.props.data,
            title: this.props.title,
            color: this.props.color,
        }
        */
    }

    componentDidUpdate() {


        this.myChart.data.labels = this.props.data.map(d => d.time);
        this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
        this.myChart.update();
    }

    componentDidMount() {

        this.myChart = new Chart(this.canvasRef.current, {
            type: 'line',
            options: {
                maintainAspectRatio: false,
                scales: {
                    xAxis:
                    {
                        type: 'time',
                        time: {
                            unit: 'week'
                        }
                    }
                    ,
                    yAxis:
                    {
                        ticks: {
                            min: 0
                        }
                    }
                }
            },
            data: {
                labels: this.props.data.map(d => d.time),
                datasets: [{
                    label: this.props.title,
                    data: this.props.data.map(d => d.value),
                    fill: 'none',
                    backgroundColor: this.props.color,
                    pointRadius: 2,
                    borderColor: this.props.color,
                    borderWidth: 1,
                    lineTension: 0
                }]
            }
        });
    }

    componentWillUnmount() {
        this.myChart.destroy();
    }

    render() {
        return <canvas ref={this.canvasRef} />;
    }
}

export default LineChart;
