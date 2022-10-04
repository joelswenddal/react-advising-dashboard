import React, { Component } from 'react';
import Chart from 'chart.js/auto';



// Doughnut
class DoughnutChart extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map(d => d.label);
        this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
        this.myChart.update();
    }

    componentDidMount() {
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'doughnut',
            options: {
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: this.props.title,
                        align: 'start',
                        font: {
                            size: 14
                        },
                        color: "#1f4761"
                    },
                },
            },
            data: {
                labels: this.props.data.map(d => d.label),
                datasets: [{
                    label: this.props.title,
                    data: this.props.data.map(d => d.value),
                    backgroundColor: this.props.colors
                }]
            }
        });
        
    }

    componentWillUnmount() {
        this.myChart.destroy();
    }


    render() {
        return (
            <canvas ref={this.canvasRef} />
        );
    }
}

export default DoughnutChart;