import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
//these are used to configure the Chart.js component (bar)
export const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: '2021 - Appointments By Month',
            align: 'start',
        },
    },
    scales: {
        y: {
            min: 60,
            max: 220
        }
    }
};


class BarChartB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: this.props.fetchData(),
        }

        //this.handleClick = this.handleClick.bind(this);
        //this.updateChart = this.updateChart.bind(this);
    }
    /*
    componentDidMount() {
        this.updateChart()
    }

    
    updateChart() {

    }
    */
    render() {
        return (

            <div className="container-fluid" id="bubble-chart">
                <Bar width={this.props.width} height={this.props.height} data={this.state.data} options={options} />
            </div>

        );
    }
};


export default BarChartB;

